import "./App.css";
import IconApple from "./comps/icons/IconApple";
import Avatar from "./comps/uiComps/Avatars";
import Button from "./comps/uiComps/Button/Button";
import Dropdown from "./comps/uiComps/Dropdown/Dropdown";
import DropdownItem from "./comps/uiComps/Dropdown/DropdownItem";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold">React New Version</h1> */}
      <Avatar
        icon={<IconApple />}
        name="mg"
        presenceIcon={<IconApple />}
        presenceState="idle"
        shape="circular"
        size="md"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />

      <Button
        btnColor="primary"
        btnSize="lg"
        fillType="solid"
        onClick={() => console.log("Clicked")}
        text="Primary"
      />
      <Dropdown
        btnColor="primary"
        btnSize="md"
        fillType="solid"
        text="Basic Dropdown"
      >
        <DropdownItem name="Hello World" value={1} />
        <DropdownItem name="Lorem Ipsum" value={2} />
      </Dropdown>
    </>
  );
}

export default App;
