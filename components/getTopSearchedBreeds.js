import { db } from './firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export async function getTopSearchedBreeds() {
  const q = query(
    collection(db, 'breedSearchCounts'),
    orderBy('count', 'desc'), // Order by count in descending order
    limit(4) // Limit the results to the top 4 breeds
  );

  const querySnapshot = await getDocs(q);

  const topBreeds = [];

  querySnapshot.forEach((doc) => {
    topBreeds.push({
      breedID: doc.id, // Document name as breed name
      count: doc.data().count,
    });
  });
  

  return topBreeds;
}