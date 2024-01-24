export const createFormDataFromJson = (json: any) => {
  const formData = new FormData();
  Object.keys(json).map((key: string) => {
    formData.append(key, json[key]);
  });
  return formData;
};

export const createJsonFromFormData = (formData: FormData) => {
  const jsonObj: { [key: string]: any } = {};
  formData.forEach((value, key) => (jsonObj[key] = value));
  return jsonObj;
};
