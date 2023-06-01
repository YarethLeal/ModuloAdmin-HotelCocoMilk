import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import autoTable from 'jspdf-autotable';
import { DomSanitizer } from '@angular/platform-browser';

export class Utils {
  static _sanitizer: DomSanitizer;

  static getFormData(item: any) {
    var form_data = new FormData();

    for (var key in item) {
      form_data.append(key, item[key]);
    }
    return form_data;
  }


  static getFormDataArray(data: any) {

    var form_data = new FormData();

    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      for (var key in item) {
        form_data.append(key, item[key]);
      }
    }
    return form_data;
  }

  static exportToPdf(headers: any, data: any[][], title: string | string[], info: any[] | undefined) {

    const unit = "pt";
    const size = "A4";
    const orientation = "landscape";

    const marginLeft = 40;
    var marginY = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    doc.text(title, marginLeft, marginY);
    if (info !== undefined) {
      info.forEach(element => {
        doc.text(element, 40, marginY += 25);
      });
    }

    let content = {
      headStyles: { fillColor: "#0f1521" },
      startY: marginY + 10,
      head: headers,
      body: data,
    };


    autoTable(doc, content);
    doc.save(title + ".pdf")
  }

  //convertir imagen a byte
  static imageToByte(file: File | Blob): any {
    var byteImagePromise: Promise<string> =
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          resolve(e.target.result.split('base64,')[1] as string);
        };

        reader.readAsDataURL(file);
        reader.onerror = reject;
      });
    return byteImagePromise;
  }

  static byteToImage(byteImage: any): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      + byteImage);
  }

}
