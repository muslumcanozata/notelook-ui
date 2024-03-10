import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Button,
  useToast,
  Box,
  Divider,
  Flex,
  Text,
  Select,
  Input,
} from "@chakra-ui/react";
import {
  AddIcon,
  DeleteIcon,
  EditIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { data } from "../pages/home";
import StatusComponent, { Statues } from "./Status.component";
import dayjs from "dayjs";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useModalStore } from "../stores/modal.store";

const ModalComponent = () => {
  const { id, isOpen, onClose } = useModalStore();
  const [note, setNote] = useState();
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (id && isOpen) {
      const note = data.find((note) => note.id === id);
      setNote(note);
    } else {
      setIsAdding(true);
    }
  }, [isOpen]);

  return (
    <>
      <Box position={"relative"} width={"50%"} maxW={"50%"}>
        <Modal
          size={"full"}
          id={"note-modal"}
          motionPreset="slideInTop"
          isOpen={isOpen}
          onClose={() => {
            onClose();
            setNote(null);
            setIsAdding(false);
          }}
        >
          <ModalContent>
            <ModalHeader>
              {isAdding ? "Add New Note" : note?.title} {id}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box p={2}>
                {isAdding && (
                  <Input
                    mb={3}
                    value={note?.title}
                    onChange={(e) => {
                      setNote({
                        ...note,
                        title: e.target.value,
                      });
                    }}
                    placeholder={"Title"}
                    variant={"flushed"}
                  />
                )}
                {isAdding ? (
                  <Flex gap={3}>
                    <Select
                      variant={"flushed"}
                      value={note?.status}
                      onChage={(e) => {
                        setNote({
                          ...note,
                          status: e.target.value,
                        });
                      }}
                      w={"25%"}
                    >
                      <option>Select Status</option>
                      {Object.keys(Statues).map((k, i) => (
                        <option key={i} value={k}>
                          {k}
                        </option>
                      ))}
                    </Select>
                    <Input
                      variant={"flushed"}
                      value={note?.date}
                      onChange={(e) => {
                        setNote({
                          ...note,
                          date: e.target.value,
                        });
                      }}
                      type={"date"}
                      w={"25%"}
                    />
                  </Flex>
                ) : (
                  <Flex gap={3}>
                    <StatusComponent status={note?.status} />
                    <Text>|</Text>
                    {dayjs(note?.date).format("DD/MM/YYYY")}
                  </Flex>
                )}

                <Divider my={3} />

                <MarkdownEditor
                  value={note?.content}
                  height="65vh"
                  previewProps={{}}
                  visible
                  onChange={(value, viewUpdate) => {
                    if (note) {
                      setNote({
                        ...note,
                        content: value,
                      });
                    }
                  }}
                />
              </Box>
            </ModalBody>

            <ModalFooter>
              {isAdding ? (
                <IconButton
                  colorScheme={"green"}
                  mx={2}
                  aria-label={"add"}
                  icon={<AddIcon />}
                />
              ) : (
                <>
                  <IconButton
                    colorScheme={"red"}
                    mx={2}
                    aria-label={"delete"}
                    icon={<DeleteIcon />}
                  />
                  <IconButton
                    onClick={() => {
                      console.log("");
                    }}
                    colorScheme={"green"}
                    aria-label={"edit"}
                    icon={<EditIcon />}
                  />
                </>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default ModalComponent;
