import { db } from '@/components/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export async function getTop10() {
  const q = query(
    collection(db, 'breedSearchCounts'),
    orderBy('count', 'desc'), // Order by count in descending order
    limit(10) // Limit the results to the top 10 breeds
  );

  const querySnapshot = await getDocs(q);

  const topBreeds = [];

  querySnapshot.forEach((doc) => {
    topBreeds.push({
      breedID: doc.id, 
      count: doc.data().count,
    });
  });
  

  return topBreeds;
}