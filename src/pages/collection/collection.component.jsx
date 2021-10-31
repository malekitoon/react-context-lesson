import React, { useContext } from 'react';

import CollectionsContexts from '../../contexts/collections/collections.context';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

// Option 1: useContext(MyContext)
const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContexts);

  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// // Option 2: <Contexts.Consumer>{context => (<div>{context}</div>)}</Contexts.Consumer>
// const CollectionPage = ({ match }) => {
//   return (
//     <CollectionsContexts.Consumer>
//       {collections => {
//         const collection = collections[match.params.collectionId];
//         const { title, items } = collection;
//
//         return (
//           <div className='collection-page'>
//             <h2 className='title'>{title}</h2>
//             <div className='items'>
//               {items.map(item => (
//                 <CollectionItem key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         );
//       }}
//     </CollectionsContexts.Consumer>
//   );
// };

export default CollectionPage;
