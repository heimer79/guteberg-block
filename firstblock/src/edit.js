import {useBlockProps} from "@wordpress/block-editor"; // react hook
import "./editor.scss";

export default function edit() {
  const BlockProps = useBlockProps();
  return <p {...BlockProps}> Edit JSX</p>;
}
