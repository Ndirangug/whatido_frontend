import { ExploreCategorySkeletonContainer } from '../../../styles/skeleton.styles';

function ExploreCategorySkeletonCard() {
  return (
    <div className="skleton-card-container">
      <p>skeleton</p>
    </div>
  );
}

function ExploreCategorySkeleton() {
  return (
    <ExploreCategorySkeletonContainer>
      <ExploreCategorySkeletonCard />
      <ExploreCategorySkeletonCard />
      <ExploreCategorySkeletonCard />
    </ExploreCategorySkeletonContainer>
  );
}

export default ExploreCategorySkeleton;
