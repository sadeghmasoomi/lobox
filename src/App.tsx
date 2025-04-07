import "./App.scss";
import { Card, Select } from "antd";
import type { SelectProps } from "antd";

function App() {
  const options: SelectProps["options"] = [
    {
      label: "Education🎓",
      value: "Education",
    },
    {
      label: "Yeeeeah, science!",
      value: "Yeeeeah, science!",
    },
    {
      label: "Art🎭",
      value: "Art",
    },
    {
      label: "Sport⚽️",
      value: "Sport",
    },
    {
      label: "Games🎮",
      value: "Games",
    },
    {
      label: "Health🏥",
      value: "Health",
    },
  ];

  return (
    <Card className="card">
      <Select
        className="select-box"
        mode="tags"
        style={{ width: "100%" }}
        placeholder="Science"
        options={options}
      />
    </Card>
  );
}

export default App;
