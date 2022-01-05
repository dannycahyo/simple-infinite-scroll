import React from "react";
import { SimpleGrid, Box, Heading, Image, Badge } from "@chakra-ui/react";
import { ProductType } from "./type";
import { StarIcon } from "@chakra-ui/icons";

const Product = ({ products }: { products: ProductType[] }) => {
  return (
    <Box px="40" py="12" justifyContent="center" alignItems="center">
      <Heading size="xl" mb="8">
        All Products
      </Heading>
      <SimpleGrid columns={4} spacingY="20px" spacingX="40px">
        {products.map((product) => (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={product.id}
          >
            <Image
              height={350}
              width={372}
              src={product.image}
              alt={product.title}
            />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {product.category}
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {product.title}
              </Box>

              <Box>
                {product.price}
                <Box as="span" color="gray.600" fontSize="sm">
                  / item
                </Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={
                        i < Math.round(product.rating.rate)
                          ? "teal.500"
                          : "gray.300"
                      }
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {product.rating.count} reviews
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Product;
