import { Box, Stack, Typography } from "@mui/material";

const CategoryList = ({
  categories = [],
  selectedCategory,
  onSelectCategory,
}) => (
  <Box sx={{ p: "20px", mt: "20px" }}>
    <Stack
      direction="row"
      sx={{
        gap: "16px",
        overflowX: "auto",
        flexWrap: "nowrap",
        pb: "8px",
        justifyContent: { md: "center" },
      }}
    >
      {categories.map(({ strCategory, strCategoryThumb }) => (
        <Stack
          key={strCategory}
          onClick={() => onSelectCategory(strCategory)}
          sx={{
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            minWidth: "80px",
          }}
        >
          <Box
            sx={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              overflow: "hidden",
              border:
                selectedCategory === strCategory
                  ? "3px solid #0A6847"
                  : "3px solid transparent",
            }}
          >
            <img
              src={strCategoryThumb}
              alt={strCategory}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              color: selectedCategory === strCategory ? "#0A6847" : "#333",
            }}
          >
            {strCategory}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Box>
);

export default CategoryList;
