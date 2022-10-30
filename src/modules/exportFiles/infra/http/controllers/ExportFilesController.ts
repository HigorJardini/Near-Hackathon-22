import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ExportService from '@modules/exportFiles/services/ExportService';
import ExtractService from '@modules/transactions/services/ExtractService';

export default class ExportFilesController {
  public async extract(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const filetype = Number(request.params.filetype);

    switch(filetype){
      case 1:
        const extractService = container.resolve(ExtractService);
        const exportService = container.resolve(ExportService);
        const data = await extractService.execute();
        const file = await exportService.execute({data});
        response.attachment("teste.csv");
        response.status(200).send(file);
        break;
    }

    return response.json();
  }

}
