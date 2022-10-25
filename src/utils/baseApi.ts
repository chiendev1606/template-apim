import HttpService from './http';

export class BaseApi {
  protected model = '';

  constructor(modelName: string) {
    this.model = modelName;
    // Set Header Auth for all APi
  }

  // getAll(): Promise<any> {
  //   const endpoint = `${this.model}s/all`;
  //   return HttpService.get(endpoint);
  // }

  getAll(): Promise<any> {
    const endpoint = `${this.model}s`;
    return HttpService.get(endpoint);
  }

  getByParams(params: any): Promise<any> {
    const endpoint = `${this.model}s`;
    return HttpService.get(endpoint, params);
  }

  getFilterSelect(params: any): Promise<any> {
    // const endpoint = `${this.model}s/filter`;
    const endpoint = `${this.model}s`;
    return HttpService.get(endpoint, params);
  }

  getDetail(id: number): Promise<any> {
    const endpoint = `${this.model}`;
    return HttpService.get(endpoint, { id });
  }

  update(payload: any): Promise<any> {
    const endpoint = `${this.model}`;
    return HttpService.put(endpoint, payload);
  }

  create(payload: any): Promise<any> {
    const endpoint = `${this.model}`;
    return HttpService.post(endpoint, payload);
  }

  delete(ids: number[]): Promise<any> {
    const endpoint = `${this.model}`;
    return HttpService.deleteMulti(endpoint, ids);
  }

  upload(evtFile: any): Promise<any> | undefined {
    if (!evtFile?.target?.files) {
      return;
    }
    const files = [...evtFile.target.files];
    const formData = new FormData();
    files.map((file: any) => {
      formData.append('file[]', file);
    });
    const endpoint = 'upload';
    return HttpService.uploadFile(endpoint, formData, evtFile.optionUpload);
  }
}
