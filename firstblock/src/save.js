import {useBlockProps} from "@wordpress/block-editor"; // react hook

export default function save() {
  const BlockProps = useBlockProps.save(); // only method save to load the front attributes and class
  return <p {...BlockProps}> Save JSX</p>;
}
