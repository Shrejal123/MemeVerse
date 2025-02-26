import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MemeCard = memo(function MemeCard({ meme, deleteMeme }) {
  return (
    <div className="p-2 border rounded-lg relative">
      <LazyLoadImage
        src={meme.url}
        alt="Meme"
        effect="blur"
        className="w-full h-auto rounded"
      />
      <p className="mt-2 text-center">
        {meme.caption ? (
          <span dangerouslySetInnerHTML={{ __html: meme.caption }} />
        ) : (
          "No caption available"
        )}
      </p>
      <button
        onClick={() => deleteMeme(meme.id)}
        className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded"
      >
        ❌
      </button>
    </div>
  );
});

export default MemeCard;
