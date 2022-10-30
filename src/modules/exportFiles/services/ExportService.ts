import { injectable, inject } from 'tsyringe';
import { Parser } from 'json2csv';

interface IRequest {
  data: any;
}

require('dotenv').config();

@injectable()
class ExportService {
  constructor(

  ) {
    
  }

  public async execute({data}: IRequest): Promise<any> {

    const content = [];

    data.results.forEach(element => {

      const date = new Date();
      
        const item = [
          element.category,
          element.amount,
          element.date
        ]

        content.push(item);
    });

    console.log(content);
    
    // const fields = ['categoria', 'nome', 'valor', 'date'];
    
    // const json2csvParser = new Parser({ fields });
    // const csv = json2csvParser.parse(myCars);
    
    // return csv;
    
  }
}

export default ExportService;
