type TypingBubbleProps = {
  color?: string;
};

export const TypingBubble = (props: TypingBubbleProps) => (
  <div class="flex items-center">
    <div class="w-2 h-2 mr-1 rounded-full bubble1" style={{ 'background-color': props.color || '#fff' }} />
    <div class="w-2 h-2 mr-1 rounded-full bubble2" style={{ 'background-color': props.color || '#fff' }} />
    <div class="w-2 h-2 rounded-full bubble3" style={{ 'background-color': props.color || '#fff' }} />
  </div>
);
