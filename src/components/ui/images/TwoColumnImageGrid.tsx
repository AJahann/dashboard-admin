export default function TwoColumnImageGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <img
          alt=" grid"
          className="border border-gray-200 rounded-xl dark:border-gray-800"
          src="/images/grid-image/image-02.png"
        />
      </div>

      <div>
        <img
          alt=" grid"
          className="border border-gray-200 rounded-xl dark:border-gray-800"
          src="/images/grid-image/image-03.png"
        />
      </div>
    </div>
  );
}
