import { Controller, Get, HttpCode, Query, Redirect } from '@nestjs/common';

@Controller('patrones')
export class PatronesController {
  @Get('ab*cd')
  findAll() {
    return 'get /patrones/abcd';
  }
  @Get('codigo')
  @HttpCode(204)
  getCodigo() {
    return 'Devuelve el código HTTP 204';
  }
  // Redirección
  @Get('redir')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return {
        url: 'https://docs.nestjs.com/v5/'
      };
    }
  }
}
