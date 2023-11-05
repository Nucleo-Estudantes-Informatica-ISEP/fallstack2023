import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const HistorySection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-2">
      <h1 className="w-1/2 text-center text-black font-bold mx-auto text-xl">
        Histórico de Scans
      </h1>
      <Table aria-label="Example static collection table" className="w-3/4">
        <TableHeader>
          <TableColumn className="text-gray-500">Empresa</TableColumn>
          <TableColumn className="text-gray-500">Data</TableColumn>
          <TableColumn className="text-gray-500">Ação</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell className="text-black">Tony Reichert</TableCell>
            <TableCell className="text-black">CEO</TableCell>
            <TableCell className="text-black">Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell className="text-black">Zoey Lang</TableCell>
            <TableCell className="text-black">Technical Lead</TableCell>
            <TableCell className="text-black">Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell className="text-black">Jane Fisher</TableCell>
            <TableCell className="text-black">Senior Developer</TableCell>
            <TableCell className="text-black">Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="text-black">William Howard</TableCell>
            <TableCell className="text-black">Community Manager</TableCell>
            <TableCell className="text-black">Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default HistorySection;
