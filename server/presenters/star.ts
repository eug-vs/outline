import { Star } from "@server/models";

export default function present(star: Star) {
  return {
    id: star.id,
    documentId: star.documentId,
    index: star.index,
    createdAt: star.createdAt,
    updatedAt: star.updatedAt,
  };
}
