import { injectable, inject } from 'tsyringe';
import { Parser } from 'json2csv';
import moment from 'moment';

interface IRequest {
  data: any;
}

require('dotenv').config();

interface ICsv {
  categoria: string;
  nome: string;
  valor: number;
  date: string;
}

@injectable()
class ExportService {
  constructor(

  ) {
    
  }

  public async execute({data}: IRequest): Promise<any> {


    const content = [];

    data.results.forEach(element => {
      
        const item: ICsv = {};

        item.categoria = element.category;

        if(element.paymentData){
          item.nome = element.paymentData.payer.name;
        } else {
          item.nome = "";
        }

        item.valor = element.amount;
        item.date   = moment(element.date).format('DD-MM-YYYY');

        content.push(item);
    });
    
    const fields = ['categoria', 'nome', 'valor', 'date'];
    
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(content);

    return csv;
    
  }
}

export default ExportService;
