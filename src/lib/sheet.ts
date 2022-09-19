import axios, { AxiosResponse } from "axios";

export const request = async (sheet: string): Promise<Section[]> => {
  const url = new URL(
    "https://script.google.com/macros/s/AKfycbz55o9jVBSWTqAGpTldPY-cq5hCv6YePQY3QW5vNoXseoVUXwUmQxpm2VY0dFa81ssA/exec"
  );
  url.searchParams.set("sheet", sheet);
  const res: AxiosResponse<APIResponse> = await axios.get(url.toString());
  const data = res.data;
  if (data.error) {
    throw new Error(`エラーが発生しました: ${data.errorMessage}`);
  }
  return res.data.data;
};

export async function getMasters(): Promise<Master[]> {
  const response: AxiosResponse<MasterResponse> = await axios.get(
    "https://script.google.com/macros/s/AKfycbz55o9jVBSWTqAGpTldPY-cq5hCv6YePQY3QW5vNoXseoVUXwUmQxpm2VY0dFa81ssA/exec?master=true"
  );

  const data = response.data;

  if (data.error) {
    throw new Error("マスターを取得できませんでした: " + data.errorMessage);
  }
  return data.data;
}

export async function getContents(sheetId: string) {
  const url = new URL(
    "https://script.google.com/macros/s/AKfycbz55o9jVBSWTqAGpTldPY-cq5hCv6YePQY3QW5vNoXseoVUXwUmQxpm2VY0dFa81ssA/exec"
  );
  url.searchParams.set("sheet", sheetId);
  const res: AxiosResponse<APIResponse> = await axios.get(url.toString());
  const data = res.data;
  if (data.error) {
    throw new Error(`エラーが発生しました: ${data.errorMessage}`);
  }

  return data.data;
}
