

export class Utils {
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

}
