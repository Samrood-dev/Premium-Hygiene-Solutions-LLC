import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "./MyDatePicker.css";

type Props = {
  selected?: Date
  onSelect: (date: Date | undefined) => void
}
export default function MyDatePicker({selected, onSelect}: Props) {
  // const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      className="w-full"
      onSelect={onSelect}
      disabled={{ before: new Date() }} />
    //   footer={
    //     selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
    //   }
  );
}
