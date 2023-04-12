import { Center, Flex } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { sendMessage } from "src/services/extension";
import useFetch from "use-http";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [prediction, setPrediction] = useState<{
    phishingPercentage: number;
    result: string;
    url: string;
    detail: any;
  }>({
    phishingPercentage: 0,
    result: "",
    url: "",
    detail: {},
  });
  const { post } = useFetch("/predict");

  const getURL = useCallback(async () => {
    const data = await sendMessage({ type: "get_page_info" });
    setUrl(data.url || "");
  }, []);

  useEffect(() => {
    getURL();
    if (!!url) {
      post({ url }).then((res) => {
        setPrediction(res.predictions[0]);
      });
    }
  }, [getURL, post, url]);
  console.log(prediction.detail);

  return (
    <Flex direction="column">
      <Center>{url}</Center>
      <Center>{prediction.result}</Center>
      <Center>{100 - prediction.phishingPercentage}</Center>
      {Object.keys(prediction.detail).map((key) => (
        <Center>{`${key}: ${
          prediction.detail[key] === 0 ? "True" : "False"
        }`}</Center>
      ))}
    </Flex>
  );
}
