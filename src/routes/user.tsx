import { createFileRoute } from "@tanstack/react-router";
import {
  TableBody,
  ListBox,
  Popover,
  ComboBox,
  ListBoxItem,
  SelectValue,
  Select,
} from "react-aria-components";
import { Cell } from "../components/Table";
import { Column } from "../components/Table";
import { Row } from "../components/Table";
import { Table } from "../components/Table";
import { Button } from "../components/Button";
import { Tabs } from "../components/Tabs";
import { TabList } from "../components/Tabs";
import { Tab } from "../components/Tabs";
import { TabPanel } from "../components/Tabs";
import { FieldError, Input } from "../components/Field";
import { Label } from "../components/Field";
import { TableHeader } from "../components/Table";
import users from "../../users.json";
import { Form } from "../components/Form";

export const Route = createFileRoute("/user")({
  component: UserComponent,
});

function UserComponent() {
  const usersListBoxItem: React.ReactElement[] = [];
  users.forEach((user: { username: string; password: string }) => {
    usersListBoxItem.push(
      <ListBoxItem id={user.username}>{user.username}</ListBoxItem>
    );
  });

  const invitesRecRow: React.ReactElement[] = [];
  const inviteRec = users.filter((user: { username: string }) => {
    return user.username === "MichaelC";
  })[0].inviteRec;
  console.log(inviteRec);
  inviteRec
    ? inviteRec.forEach(
        (invite: { username: string; type: string; dateGiven: string }) => {
          invitesRecRow.push(
            <Row>
              <Cell>{invite.username}</Cell>
              <Cell>{invite.type}</Cell>
              <Cell>{invite.dateGiven}</Cell>
            </Row>
          );
        }
      )
    : null;

  const invitesGivRow: React.ReactElement[] = [];
  const inviteGiv = users.filter((user: { username: string }) => {
    return user.username === "MichaelC";
  })[0].inviteGiv;
  inviteGiv
    ? inviteGiv.forEach(
        (invite: { username: string; type: string; dateGiven: string }) => {
          invitesGivRow.push(
            <Row>
              <Cell>{invite.username}</Cell>
              <Cell>{invite.type}</Cell>
              <Cell>{invite.dateGiven}</Cell>
              <Cell>
                <Button onPress={() => alert("Deleted")}>Delete</Button>
              </Cell>
            </Row>
          );
        }
      )
    : null;

  return (
    <div className="p-2">
      <Tabs>
        <TabList aria-label="InvitationTabs">
          <Tab id="InvG">Invites Given</Tab>
          <Tab id="InvR">Invites Received</Tab>
        </TabList>
        <TabPanel id="InvG">
          <Table aria-label="Files" selectionMode="multiple">
            <TableHeader>
              <Column isRowHeader>User</Column>
              <Column>Date Invited</Column>
              <Column>Permissions</Column>
              <Column>Actions</Column>
            </TableHeader>
            <TableBody>{invitesGivRow}</TableBody>
          </Table>
        </TabPanel>
        <TabPanel id="InvR">
          <Table aria-label="Files" selectionMode="multiple">
            <TableHeader>
              <Column isRowHeader>Name</Column>
              <Column>Type</Column>
              <Column>Date Modified</Column>
            </TableHeader>
            <TableBody>{invitesRecRow}</TableBody>
          </Table>{" "}
        </TabPanel>
      </Tabs>
      <div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));
            console.log(Object.values(data));
          }}
        >
          <Label>Invite User</Label>
          <div className="flex flex-row ...">
            <ComboBox name="username" formValue="text">
              <div>
                <Input />
                <Button>▼</Button>
              </div>
              <Popover>
                <ListBox>{usersListBoxItem}</ListBox>
              </Popover>
            </ComboBox>
            <Button type="submit">Invite</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
