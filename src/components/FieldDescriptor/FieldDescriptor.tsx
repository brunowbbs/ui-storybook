import * as FD from "./FieldDescriptor.styles";

export interface FieldDescriptorProps {
  description: string;
  value: string;
}

export default function FieldDescriptor({
  description,
  value,
}: FieldDescriptorProps) {
  return (
    <FD.Wrapper>
      <strong>{description}:</strong>
      <p>{value}</p>
    </FD.Wrapper>
  );
}
