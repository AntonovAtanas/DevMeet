export const eventPatterns = {
    title: '^.{4,30}$',
    imageUrl: `^https?:\/\/.+?\.(?:png|jpe?g|gif|bmp|webp)$`,
    description: '^.{20,500}$',
    ticketPrice: '^[0-9]+$',
    capacity: '^[0-9]+$',
};
