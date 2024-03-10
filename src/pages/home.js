import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  IconButton,
} from "@chakra-ui/react";
import HeadingComponent from "../components/Heading.component";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import StatusComponent from "../components/Status.component";
import dayjs from "dayjs";
import ModalComponent from "../components/Modal.component";
import { useModalStore } from "../stores/modal.store";

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

# Test
`;
export const data = [
  {
    id: 1,
    title: "Post 1",
    content: markdown,
    status: "BACKLOG",
    date: "2021-09-01",
  },
  {
    id: 2,
    title: "Post 2",
    content: "# DEsct",
    status: "IN_PROGRESS",
    date: "2021-09-01",
  },
  {
    id: 3,
    title: "Post 3",
    content: "# DEsct",
    status: "DONE",
    date: "2021-09-01",
  },
  {
    id: 4,
    title: "Post 4",
    content: "# DEsct",
    status: "BACKLOG",
    date: "2021-09-01",
  },
];

const Home = () => {
  const { onOpen } = useModalStore();

  return (
    <Box w={"100%"}>
      <HeadingComponent title={"Note Look"} />

      <Box my={4}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Order</Th>
                <Th>Title</Th>
                <Th>Status</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => {
                return (
                  <Tr key={item.id}>
                    <Td>#{index + 1}</Td>
                    <Td>{item.title}</Td>
                    <Td>
                      <StatusComponent status={item.status} />
                    </Td>
                    <Td>{dayjs(item.date).format("DD MMM YYYY")}</Td>
                    <Td>
                      <IconButton
                        onClick={() => onOpen(item?.id)}
                        icon={<InfoOutlineIcon />}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <ModalComponent />
    </Box>
  );
};

export default Home;
