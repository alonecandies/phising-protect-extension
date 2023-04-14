import { ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "src/hooks/useStore";
import { sendMessage } from "src/services/extension";
import { setSearchKey } from "src/store/global";
import useFetch from "use-http";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<{
    phishingPercentage: number;
    result: string;
    url: string;
  }>({
    phishingPercentage: 0,
    result: "",
    url: "",
  });
  const [detail, setDetail] = useState<any>();
  const [search, setSearch] = useState<string>("");
  const history = useHistory();
  const dispatch = useAppDispatch();

  const { post: getPredict } = useFetch("/predict");

  const { post: getDetail } = useFetch("/detail");

  const getURL = useCallback(async () => {
    const data = await sendMessage({ type: "get_page_info" });
    setUrl(data.url || "");
    setSearch(data.url || "");
    dispatch(setSearchKey(data.url || ""));
  }, [dispatch]);

  const isNewTab = useMemo(() => url.includes("chrome://"), [url]);

  const phishingPercentage = useMemo(() => {
    if (!prediction.phishingPercentage) return 0;
    let result = 100 - prediction.phishingPercentage;
    return Number(result.toFixed(0));
  }, [prediction.phishingPercentage]);
  console.log(prediction);

  useEffect(() => {
    getURL();
    if (!!url) {
      getPredict({ url }).then((res) => {
        setPrediction(res.predictions[0]);
      });
    }
  }, [getURL, getPredict, url]);

  useEffect(() => {
    if (!!url) {
      getDetail({ url }).then((res) => {
        console.log(res);
        setDetail(res.detail);
      });
    }
  }, [getDetail, url]);

  if (isNewTab) return <Center>New tab</Center>;

  return (
    <Flex direction="column">
      <InputGroup>
        <Input
          background="#F7F7F7"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            dispatch(setSearchKey(e.target.value));
          }}
          mx={4}
          mt={4}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getPredict({ url: search }).then((res) => {
                setPrediction(res.predictions[0]);
              });
            }
          }}
          placeholder="Insert URL to check"
        />
        <InputRightElement
          children={<SearchIcon />}
          mt={4}
          mr={4}
          onClick={() => {
            getPredict({ url: search }).then((res) => {
              setPrediction(res.predictions[0]);
            });
          }}
          cursor="pointer"
        />
      </InputGroup>
      <Flex justify="center" align="center" my={3}>
        <CircularProgress
          value={phishingPercentage}
          color={
            phishingPercentage > 65
              ? "primary.200"
              : phishingPercentage > 45
              ? "orange.200"
              : "red.800"
          }
          size="135px"
        >
          <CircularProgressLabel
            fontSize="2xl"
            fontWeight="semibold"
            color={
              phishingPercentage > 65
                ? "primary.200"
                : phishingPercentage > 45
                ? "orange.200"
                : "red.800"
            }
          >
            {phishingPercentage}%
          </CircularProgressLabel>
        </CircularProgress>
      </Flex>
      <Center mb={3} fontWeight="500">
        {prediction.result}
      </Center>
      {!isNewTab && (
        <Flex mx={4} mb={3}>
          <Button
            w="full"
            h="45px"
            borderRadius="3px"
            background="#242424"
            color="white"
            fontWeight="semibold"
            _hover={{ background: "#242424" }}
            onClick={() => {
              history.push("/report");
            }}
            disabled={!url && !search}
          >
            Report this website
          </Button>
        </Flex>
      )}
      <Flex mx={4}>
        <Button
          onClick={() => setIsShowDetail((prev) => !prev)}
          w="full"
          h="45px"
          borderRadius="3px"
          background={isShowDetail ? "transparent" : "primary.200"}
          color={isShowDetail ? "primary.200" : "white"}
          fontWeight="semibold"
          _hover={
            isShowDetail
              ? { background: "transparent" }
              : { background: "primary.200" }
          }
          border="2px solid"
          borderColor="primary.200"
          _focus={{
            boxShadow: "none",
            outline: "none",
          }}
          disabled={isEmpty(detail)}
        >
          Details
        </Button>
      </Flex>
      {isShowDetail && detail && (
        <Flex direction="column" justify="center" align="center" mx={2} mt={2}>
          <Flex wrap="wrap" justify="center">
            {Object.keys(detail).map((item) => (
              <Text
                background="primary.200"
                mx={2}
                my={1}
                color="white"
                py={1}
                px={2}
                borderRadius="5px"
                fontSize="sm"
              >
                {item}: {detail[item]}
              </Text>
            ))}
          </Flex>
          <ChevronUpIcon
            mt={1}
            color="#979797"
            boxSize={5}
            cursor="pointer"
            onClick={() => setIsShowDetail(false)}
          />
        </Flex>
      )}
    </Flex>
  );
}
