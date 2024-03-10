import { Button, Flex, Heading, Highlight } from "@chakra-ui/react";
import React from "react";
import { useModalStore } from "../stores/modal.store";

const HeadingComponent = ({ title }) => {
  const titleSplit = title.split(" ");
  const { onOpen } = useModalStore();

  return (
    <Flex align={"center"} justify={"space-between"}>
      <Heading lineHeight="tall">
        > {titleSplit[0]}
        {titleSplit.length > 1 && (
          <Highlight
            query={titleSplit[1]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "teal.400",
              color: "white",
            }}
          >
            {titleSplit[1]}
          </Highlight>
        )}
      </Heading>
      <Button onClick={() => onOpen(null)} colorScheme={"teal"}>
        Add Note
      </Button>
    </Flex>
  );
};

export default HeadingComponent;
