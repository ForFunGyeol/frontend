import { cn } from '@/utils/cn';

type DividerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  direction?: 'horizontal' | 'vertical';
  thickness?: 'thin' | 'thick';
  flexItem?: boolean;
};

export default function Divider<T extends React.ElementType>({
  as,
  className,
  thickness = 'thin',
  direction = 'horizontal',
  flexItem = false,
  ...props
}: DividerProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Element = as ?? 'hr';

  return (
    <Element
      className={cn(
        'flex-none border-none',
        {
          'h-1 w-full bg-gray-200': direction === 'horizontal' && thickness === 'thin',
          'h-8 w-full bg-gray-100': direction === 'horizontal' && thickness === 'thick',
          'h-full w-1 bg-gray-200': direction === 'vertical' && thickness === 'thin',
          'h-full w-8 bg-gray-100': direction === 'vertical' && thickness === 'thick',
          'self-stretch': flexItem,
        },
        className,
      )}
      {...props}
    />
  );
}
