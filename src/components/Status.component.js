import { Badge, Box } from "@chakra-ui/react";

export const Statuses = {
  BACKLOG: "gray",
  IN_PROGRESS: "yellow",
  DONE: "green",
  TO_DO: "blue",
  PENDING: "orange",
  CANCELLED: "red",
};

const StatusComponent = ({ status }) => {
  return (
    <Box>
      <Badge variant="solid" colorScheme={Statuses[status]}>
        {status}
      </Badge>
    </Box>
  );
};

export default StatusComponent;
