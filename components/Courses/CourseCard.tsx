import styled from "styled-components"
import { Rating, Stack, Typography } from "@mui/material"
import { StorageImage } from "reactfire"
import { Course } from "storage/course"
import { ArrowUpward } from "@mui/icons-material"

interface CourseCardProps {
  course: Course
}

const CourseImage = styled(StorageImage)({
  objectFit: "cover",
  height: 360,
  width: 270,
})

export function CourseCard({ course }: CourseCardProps) {
  const rating = Math.round(course?.rating * 2) / 2
  const courseAuthor = course?.verified ? course?.provider : course?.creatorId

  return (
    <Stack position="relative" width={270}>
      <CourseImage storagePath="courses/GoogleCourse.jpeg" />
      <Stack
        position="absolute"
        bottom="0"
        p="1.5rem"
        width="100%"
        borderTop="1px solid rgba(255, 255, 255, 0.3)"
        sx={{
          backdropFilter: "blur(0.8rem)",
        }}
      >
        <Stack spacing={2}>
          <Rating
            name="read-only"
            value={rating}
            precision={0.5}
            readOnly
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#FFFFFF",
              },
              "& .MuiRating-iconEmpty": {
                color: "#FFFFFF",
              },
            }}
          />
          <Typography variant="h5" fontWeight={600} color="#FFFFFF">
            {course?.title}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" fontWeight={500} color="#FFFFFF">
              By {courseAuthor}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              borderRadius="16px"
              bgcolor="primary.light"
              alignItems="center"
              justifyContent="space-between"
              px="0.5rem"
            >
              <ArrowUpward sx={{ color: "primary.main", width: "15px" }} />
              <Typography variant="body2" fontWeight={500} color="primary.main">
                {course?.xp} XP
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
