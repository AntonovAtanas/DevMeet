export const eventPatterns = {
    title: '^.{4,60}$',
    imageUrl: `^https?:\/\/.+?\.(?:png|jpe?g|gif|bmp|webp)$`,
    description: '^[\\s\\S]{20,1500}$',
    ticketPrice: '^[0-9]+$',
    capacity: '^[0-9]+$',
    location: '^[A-Za-z0-9 \\.]+, [A-Za-z]+$',
};
