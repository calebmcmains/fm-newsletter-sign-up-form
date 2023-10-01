import imgUrl from "../../assets/images/icon-list.svg";

function PerkList() {
  return (
    <>
      <div className="mb-12">
        <div className="flex gap-4 mb-3">
          <img src={imgUrl} alt="" />
          <span>Product discovery and building what matters</span>
        </div>
        <div className="flex gap-4 mb-3">
          <img src={imgUrl} alt="" />
          <span>Measuring to ensure updates are a success</span>
        </div>
        <div className="flex gap-4">
          <img src={imgUrl} alt="" />
          <span>And much more!</span>
        </div>
      </div>
    </>
  );
}

export default PerkList;
