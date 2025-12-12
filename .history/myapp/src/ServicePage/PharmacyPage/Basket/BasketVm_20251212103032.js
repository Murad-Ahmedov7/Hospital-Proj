import React from 'react'

export default function BasketVm() {
 const [productQuantity, setProductQuantity] = useState(7);
  const [itemsCount, setItemsCount] = useState(1);

  const increaseCount = () => setProductQuantity(prev => prev + 1);
  const decreaseCount = () => setProductQuantity(prev => (prev === 0 ? 0 : prev - 1));

    return {
    productQuantity,
    itemsCount,
    increaseCount,
    decreaseCount,
  };
}
