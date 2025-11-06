import UsuariosServices from '#services/UsuariosServices'
import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import { UsuarioData } from '../interfaces/usuario.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const user = new UsuariosServices()

export default class Usuarioscontroller {
  async createUsuario({ request, response }: HttpContext) {
    try {
      const { nombres, apellidos, fechanacimiento, password, email, documento, genero, tipodocumento } =
        request.body()

      const userExist = await user.readUsuarioByCorreo(email)
      const docExist = await user.readUsuarioByDocumento(documento)

      if (userExist) {
        return response.status(409).json({ message: 'El usuario ya esta registrado' })
      }
      if (docExist) {
        return response.status(409).json({ message: 'El usuario ya esta registrado' })
      }

      const hash = await bcrypt.hash(password, 10)

      await user.create({
        nombres,
        apellidos,
        fechanacimiento,
        password: hash,
        email,
        documento,
        genero,
        tipodocumento,
        idrol: 1,
      })

      return response.status(201).json({ message: 'Creado' })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno.' })
    }
  }
  async login({ request, response }: HttpContext) {
    try {
      const { email, password } = request.body()

      const userExist = await user.readUsuarioByCorreo(email)

      if (!userExist) {
        return response.status(400).json({ message: 'Credenciales invalidas email' })
      }

      const verifyPassword = await bcrypt.compare(password, userExist.password)

      if (!verifyPassword) {
        return response.status(400).json({ message: 'Credenciales invalidas password' })
      }

      const token = await createToken(userExist)

      response.cookie(`${env.get('COOKIE_NAME')}`, token, {
        httpOnly: env.get('NODE_ENV') === 'production',
        secure: env.get('NODE_ENV') === 'production',
        maxAge: 60 * 60 * 7,
        sameSite: 'lax',
        path: '/',
      })

      return response.status(200).json({
        message: 'Autorizado',
        data: {
          id: userExist.id,
          names: userExist.nombres,
          email: userExist.email,
          rol: userExist.idrol,
        },
      })
    } catch (e) {
      return response.status(500).json({ message: 'Error Interno', error: e.message })
    }
  }
  async logout({ response }: HttpContext) {
    response.clearCookie(`${env.get('COOKIE_NAME')}`)
    return response.status(200).json({ message: 'Sesión cerrada' })
  }
  async verifySesion({ request, response }: HttpContext) {
    try {
      const token = request.cookie(`${env.get('COOKIE_NAME')}`)

      if (!token) {
        return response.status(200).json({ message: 'Token no proporcionado' })
      }

      const decoded = jwt.verify(token, env.get('APP_KEY'))

      
      return response.status(200).json({ message: 'Token válido', data:decoded})
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return response.status(401).json({ message: 'Token expirado' })
      }

      if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({ message: 'Token inválido' })
      }

      // Otro tipo de error
      return response
        .status(500)
        .json({ message: 'Error al verificar el token', error: error.message })
    }
  }
}


const createToken = async (data: UsuarioData) => {
  const token = jwt.sign(
    { id: data.id, names: data.nombres, rol: data.idrol, email: data.email },
    env.get('APP_KEY'),
    {
      expiresIn: '7h',
    }
  )
  return token
}