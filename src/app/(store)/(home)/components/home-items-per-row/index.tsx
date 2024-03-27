import { ItemsButton } from './items-button';

export function HomeItemsPerRow() {
  return (
    <div className="flex gap-2">
      <ItemsButton quantity={4} />
      <ItemsButton quantity={3} />
      <ItemsButton quantity={2} />
    </div>
  );
}
