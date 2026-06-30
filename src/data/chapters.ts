export interface Question {
  q: string;
  parts?: { label: string; question: string; solution: string; diagram?: string }[];
  solution?: string;
  diagram?: string;
}

export interface ExerciseSet {
  title: string;
  questions: Question[];
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  exerciseSets: ExerciseSet[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Chapter 1",
    subtitle: "Orienting Yourself: The Use of Coordinates",
    exerciseSets: [
      {
        title: "Exercise Set 1.1",
        questions: [
          {
            q: "Fig. 1.3 shows Reiaan's room with points OABC marking its corners. Point O is the origin. Referring to Fig. 1.3, answer the following questions:",
            diagram: "ch1-fig13-room",
            parts: [
              {
                label: "(i)",
                question: "If D1R1 represents the door to Reiaan's room, how far is the door from the left wall (the y-axis) of the room? How far is the door from the x-axis?",
                solution: "The door D1R1 lies along the x-axis (y = 0). Its x-coordinates give its distance from the y-axis. From the figure, D1 is at approximately (7, 0), so the door is 7 units from the y-axis and 0 units from the x-axis (it lies on the x-axis).",
              },
              {
                label: "(ii)",
                question: "What are the coordinates of D1?",
                solution: "From the figure, D1 is at the point (7, 0).",
              },
              {
                label: "(iii)",
                question: "If R1 is the point (11.5, 0), how wide is the door? Do you think this is a comfortable width for the room door?",
                solution: "Width of door = x-coordinate of R1 − x-coordinate of D1 = 11.5 − 7 = 4.5 units (ft). A standard door is about 3 ft wide, so 4.5 ft is comfortable and also suitable for wheelchair access.",
              },
              {
                label: "(iv)",
                question: "If B1 (0, 1.5) and B2 (0, 4) represent the ends of the bathroom door, is the bathroom door narrower or wider than the room door?",
                solution: "Width of bathroom door = 4 − 1.5 = 2.5 units (ft). Width of room door = 4.5 ft. Since 2.5 < 4.5, the bathroom door is narrower than the room door.",
              },
            ],
          },
          {
            q: "Think and Reflect: What is the x-coordinate of a point on the y-axis?",
            solution: "A point on the y-axis has x-coordinate equal to 0. For example, (0, 3), (0, −5) are all on the y-axis.",
          },
          {
            q: "Think and Reflect: Is there a similar generalisation for a point on the x-axis?",
            solution: "Yes. A point on the x-axis has y-coordinate equal to 0. For example, (4, 0), (−7, 0) lie on the x-axis.",
          },
          {
            q: "Think and Reflect: Does point Q(y, x) ever coincide with point P(x, y)? Justify your answer.",
            solution: "Q(y, x) coincides with P(x, y) when y = x, i.e., when both coordinates are equal. For example, if x = y = 3, then P(3, 3) = Q(3, 3). If x ≠ y, they do not coincide.",
          },
        ],
      },
      {
        title: "Exercise Set 1.2",
        questions: [
          {
            q: "On a graph sheet, mark the x-axis and y-axis and the origin O. Using Fig. 1.5, answer the given questions.",
            diagram: "ch1-fig15-grid",
            parts: [
              {
                label: "Q1(i)",
                question: "Place Reiaan's rectangular study table with three of its feet at the points (8, 9), (11, 9) and (11, 7). Where will the fourth foot of the table be?",
                solution: "The three given feet form two sides of the rectangle: one side from (8, 9) to (11, 9) (horizontal, length = 3), and another from (11, 9) to (11, 7) (vertical, length = 2). The fourth foot completes the rectangle at (8, 7).",
              },
              {
                label: "Q1(ii)",
                question: "Is this a good spot for the table?",
                solution: "Yes, the table at coordinates (8, 7) to (11, 9) is in the interior of the room, away from walls and doors, so it is a good spot.",
              },
              {
                label: "Q1(iii)",
                question: "What is the width of the table? The length?",
                solution: "Width = 11 − 8 = 3 units (ft). Length = 9 − 7 = 2 units (ft). The height of the table cannot be determined from the 2D coordinate plan.",
              },
              {
                label: "Q3(i)",
                question: "What are the coordinates of the four corners O, F, R, and P of the bathroom?",
                solution: "From Fig. 1.5: O = (0, 0), and typical bathroom corners are at F = (0, 6), R = (4, 6), P = (4, 0) (exact values depend on the figure scale).",
              },
              {
                label: "Q4(i)",
                question: "Reiaan's room door leads from the dining room which has length 18 ft and width 15 ft. The length extends from point P to point A. Sketch the dining room and mark the coordinates of its corners.",
                solution: "Point A is at approximately (18, 0) (along the x-axis from P). The dining room corners are: P(0, 0), A(18, 0), (18, 15), (0, 15). The four corners have coordinates (0,0), (18,0), (18,15), (0,15).",
              },
            ],
          },
        ],
      },
      {
        title: "End-of-Chapter Exercises",
        questions: [
          {
            q: "1. What are the x-coordinate and y-coordinate of the point of intersection of the two axes?",
            solution: "The two axes intersect at the origin O. The x-coordinate = 0 and y-coordinate = 0. So the point is (0, 0).",
          },
          {
            q: "2. Point W has x-coordinate equal to −5. Can you predict the coordinates of point H which is on the line through W parallel to the y-axis? Which quadrants can H lie in?",
            solution: "Any point on a line parallel to the y-axis passing through x = −5 has coordinates (−5, k) for any value k. Since x = −5 < 0, point H lies in Quadrant II (if k > 0) or Quadrant III (if k < 0).",
          },
          {
            q: "3. Consider the points R(3, 0), A(0, −2), M(−5, −2) and P(−5, 2). If joined in the same order, predict: (i) Two sides of RAMP perpendicular to each other. (ii) One side parallel to one of the axes. (iii) Two points that are mirror images in one axis.",
            diagram: "ch1-ramp",
            solution: "(i) RA and AP are perpendicular since RA goes from (3,0) to (0,−2) and AP goes from (0,−2) to (−5,−2) — actually AM is horizontal and MP is vertical, so AM ⊥ MP. (ii) Side AM (from A(0,−2) to M(−5,−2)) is parallel to the x-axis. (iii) M(−5,−2) and P(−5,2) are mirror images in the x-axis.",
          },
          {
            q: "4. Plot point Z(5, −6) on the Cartesian plane. Construct a right-angled triangle IZN and find the lengths of the three sides.",
            diagram: "ch1-z-triangle",
            solution: "Step 1: Plot Z(5, −6) — move 5 units right on x-axis, then 6 units down.\nStep 2: Choose I = (5, 0) directly above Z on the x-axis, and N = (0, 0) at the origin.\nStep 3: The right angle is at I (one vertical leg, one horizontal leg).\nStep 4: Side IZ (vertical) = distance from (5,0) to (5,−6) = 6 units.\nStep 5: Side IN (horizontal) = distance from (0,0) to (5,0) = 5 units.\nStep 6: Hypotenuse ZN = √(IZ² + IN²) = √(6² + 5²) = √(36 + 25) = √61 ≈ 7.81 units.\n∴ The three sides are IZ = 6 units, IN = 5 units, ZN = √61 ≈ 7.81 units.",
          },
          {
            q: "5. What would a system of coordinates be like if we did not have negative numbers? Would this system allow us to locate all points on a 2-D plane?",
            solution: "Without negative numbers, we could only describe points in Quadrant I (both x ≥ 0 and y ≥ 0). We would not be able to locate points in Quadrants II, III, or IV, so this system would NOT allow us to locate all points on a 2-D plane.",
          },
          {
            q: "*6. Are the points M(−3, −4), A(0, 0) and G(6, 8) on the same straight line? Suggest a method to check without plotting.",
            solution: "Check if the slope between any two pairs of points is equal. Slope MA = (0−(−4))/(0−(−3)) = 4/3. Slope AG = (8−0)/(6−0) = 8/6 = 4/3. Since both slopes are equal (= 4/3), the three points are collinear (on the same straight line).",
          },
          {
            q: "*9. The table shows coordinates of S, M and T. State whether M is the midpoint of ST.",
            parts: [
              {
                label: "Row 1",
                question: "S(−3, 0), M(0, 0), T(3, 0)",
                solution: "Midpoint of ST = ((−3+3)/2, (0+0)/2) = (0, 0) = M. Yes, M is the midpoint.",
              },
              {
                label: "Row 2",
                question: "S(2, 3), M(3, 4), T(4, 5)",
                solution: "Midpoint of ST = ((2+4)/2, (3+5)/2) = (3, 4) = M. Yes, M is the midpoint.",
              },
              {
                label: "Row 3",
                question: "S(0, 0), M(0, 5), T(0, −10)",
                solution: "Midpoint of ST = ((0+0)/2, (0+(−10))/2) = (0, −5) ≠ (0, 5). No, M is not the midpoint.",
              },
              {
                label: "Row 4",
                question: "S(−8, 7), M(0, −2), T(6, −3)",
                solution: "Midpoint of ST = ((−8+6)/2, (7+(−3))/2) = (−1, 2) ≠ (0, −2). No, M is not the midpoint.",
              },
            ],
          },
          {
            q: "*10. Use the midpoint formula to find coordinates of B given that M(−7, 1) is the midpoint of A(3, −4) and B(x, y).",
            solution: "Using midpoint formula: (3+x)/2 = −7 → x = −17. (−4+y)/2 = 1 → y = 6. Therefore B = (−17, 6).",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Chapter 2",
    subtitle: "Introduction to Linear Polynomials",
    exerciseSets: [
      {
        title: "Exercise Set 2.1",
        questions: [
          {
            q: "1. Find the degrees of the following polynomials:",
            parts: [
              { label: "(i)", question: "2x² − 5x + 3", solution: "Degree = 2 (highest power of x is 2)." },
              { label: "(ii)", question: "y³ + 2y − 1", solution: "Degree = 3 (highest power of y is 3)." },
              { label: "(iii)", question: "−9", solution: "Degree = 0 (constant polynomial)." },
              { label: "(iv)", question: "4z − 3", solution: "Degree = 1 (highest power of z is 1; it is a linear polynomial)." },
            ],
          },
          {
            q: "2. Write polynomials of degrees 1, 2 and 3.",
            solution: "Degree 1: 3x + 5 | Degree 2: x² − 4x + 1 | Degree 3: 2x³ + x² − x + 7",
          },
          {
            q: "3. What are the coefficients of x² and x³ in the polynomial x⁴ − 3x³ + 6x² − 2x + 7?",
            solution: "Coefficient of x² = 6. Coefficient of x³ = −3.",
          },
          {
            q: "4. What is the coefficient of z in the polynomial 4z³ + 5z² − 11?",
            solution: "The term with z¹ is missing (coefficient = 0). Coefficient of z = 0.",
          },
          {
            q: "5. What is the constant term of the polynomial 9x³ + 5x² − 8x − 10?",
            solution: "The constant term is −10 (the term with no variable).",
          },
        ],
      },
      {
        title: "Exercise Set 2.2",
        questions: [
          {
            q: "1. Find the value of the linear polynomial 5x − 3 if:",
            parts: [
              { label: "(i)", question: "x = 0", solution: "5(0) − 3 = −3" },
              { label: "(ii)", question: "x = −1", solution: "5(−1) − 3 = −5 − 3 = −8" },
              { label: "(iii)", question: "x = 2", solution: "5(2) − 3 = 10 − 3 = 7" },
            ],
          },
          {
            q: "2. Find the value of the quadratic polynomial 7s² − 4s + 6 if:",
            parts: [
              { label: "(i)", question: "s = 0", solution: "7(0)² − 4(0) + 6 = 6" },
              { label: "(ii)", question: "s = −3", solution: "7(9) − 4(−3) + 6 = 63 + 12 + 6 = 81" },
              { label: "(iii)", question: "s = 4", solution: "7(16) − 4(4) + 6 = 112 − 16 + 6 = 102" },
            ],
          },
          {
            q: "3. The present age of Salil's mother is three times Salil's present age. After 5 years, their ages will add up to 70 years. Find their present ages.",
            solution: "Let Salil's age = x. Mother's age = 3x. After 5 years: (x+5) + (3x+5) = 70 → 4x + 10 = 70 → 4x = 60 → x = 15. Salil's age = 15 years, Mother's age = 45 years.",
          },
          {
            q: "4. The difference between two positive integers is 63. The ratio of the two integers is 2:5. Find the two integers.",
            solution: "Let the integers be 2k and 5k. Difference: 5k − 2k = 3k = 63 → k = 21. The two integers are 2×21 = 42 and 5×21 = 105.",
          },
          {
            q: "5. Ruby has 3 times as many two-rupee coins as she has five-rupee coins. If she has a total of ₹88, how many coins does she have of each type?",
            solution: "Let five-rupee coins = x. Two-rupee coins = 3x. Total: 5x + 2(3x) = 5x + 6x = 11x = 88 → x = 8. Five-rupee coins = 8, Two-rupee coins = 24.",
          },
          {
            q: "6. A farmer cuts a 300 feet fence into two pieces. The longer piece is four times the shorter piece. How long are the two pieces?",
            solution: "Let shorter piece = x. Longer piece = 4x. x + 4x = 300 → 5x = 300 → x = 60. Shorter = 60 ft, Longer = 240 ft.",
          },
          {
            q: "7. If the length of a rectangle is three more than twice its width and its perimeter is 24 cm, what are the dimensions?",
            solution: "Let width = w. Length = 2w + 3. Perimeter = 2(l + w) = 2(2w + 3 + w) = 2(3w + 3) = 6w + 6 = 24 → 6w = 18 → w = 3. Width = 3 cm, Length = 2(3)+3 = 9 cm.",
          },
        ],
      },
      {
        title: "Exercise Set 2.3",
        questions: [
          {
            q: "1. A student has ₹500 in her savings account. She gets ₹150 every month as pocket money. How much money will she have at the end of every month from the second month onwards? Find a linear expression for the amount in the nth month.",
            solution: "At end of month 1: 500 + 150 = ₹650; Month 2: ₹800; Month 3: ₹950. Linear expression: Amount in nth month = 500 + 150n. (Starting from month 0 = ₹500, each month adds ₹150.)",
          },
          {
            q: "2. A rally starts with 120 members. Each hour, 9 members drop out. Find a linear expression for the number of members at the end of the nth hour.",
            solution: "After 1 hr: 120−9 = 111; After 2 hrs: 102; After 3 hrs: 93. Linear expression: Members at end of nth hour = 120 − 9n.",
          },
          {
            q: "3. Suppose the length of a rectangle is 13 cm. Find the area if the breadth is (i) 12 cm, (ii) 10 cm, (iii) 8 cm. Find the linear pattern.",
            parts: [
              { label: "(i)", question: "Breadth = 12 cm", solution: "Area = 13 × 12 = 156 cm²" },
              { label: "(ii)", question: "Breadth = 10 cm", solution: "Area = 13 × 10 = 130 cm²" },
              { label: "(iii)", question: "Breadth = 8 cm", solution: "Area = 13 × 8 = 104 cm²" },
            ],
          },
          {
            q: "4. Suppose the length of a rectangular box is 7 cm and breadth is 11 cm. Find the volume if the height is (i) 5 cm, (ii) 9 cm, (iii) 13 cm. Find the linear pattern.",
            parts: [
              { label: "(i)", question: "Height = 5 cm", solution: "Volume = 7 × 11 × 5 = 385 cm³" },
              { label: "(ii)", question: "Height = 9 cm", solution: "Volume = 7 × 11 × 9 = 693 cm³" },
              { label: "(iii)", question: "Height = 13 cm", solution: "Volume = 7 × 11 × 13 = 1001 cm³" },
            ],
          },
          {
            q: "5. Sarita is reading a book of 500 pages. She reads 20 pages every day. How many pages will be left after 15 days? Express as a linear pattern.",
            solution: "Pages left after n days = 500 − 20n. After 15 days: 500 − 20(15) = 500 − 300 = 200 pages remaining.",
          },
        ],
      },
      {
        title: "Exercise Set 2.4",
        questions: [
          {
            q: "1. A plant has height 1.75 feet and grows by 0.5 feet each month.",
            parts: [
              { label: "(i)", question: "Find the height after 7 months.", solution: "h = 1.75 + 0.5 × 7 = 1.75 + 3.5 = 5.25 feet." },
              { label: "(ii)", question: "Make a table of values for t from 0 to 10 months.", solution: "t: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 | h: 1.75, 2.25, 2.75, 3.25, 3.75, 4.25, 4.75, 5.25, 5.75, 6.25, 6.75" },
              { label: "(iii)", question: "Find an expression for h and t, and explain why it represents linear growth.", solution: "h(t) = 1.75 + 0.5t. This is linear growth because h increases by a constant amount (0.5 feet) for each unit increase in t." },
            ],
          },
          {
            q: "2. A mobile phone bought for ₹10,000 depreciates by ₹800 every year.",
            parts: [
              { label: "(i)", question: "Find the value after 3 years.", solution: "v = 10000 − 800(3) = 10000 − 2400 = ₹7,600." },
              { label: "(ii)", question: "Make a table for t = 0 to 8 years.", solution: "t: 0,1,2,3,4,5,6,7,8 | v(₹): 10000, 9200, 8400, 7600, 6800, 6000, 5200, 4400, 3600" },
              { label: "(iii)", question: "Find an expression relating v and t, and explain why it represents linear decay.", solution: "v(t) = 10000 − 800t. This is linear decay because the value decreases by a constant ₹800 each year." },
            ],
          },
          {
            q: "3. Initial population of a village is 750. Every year, 50 people move in from a city.",
            parts: [
              { label: "(i)", question: "Find the population after 6 years.", solution: "P = 750 + 50(6) = 750 + 300 = 1050." },
              { label: "(ii)", question: "Make a table for t = 0 to 10 years.", solution: "t: 0,1,2,3,4,5,6,7,8,9,10 | P: 750,800,850,900,950,1000,1050,1100,1150,1200,1250" },
              { label: "(iii)", question: "Find an expression for P and t.", solution: "P(t) = 750 + 50t. This is linear growth since P increases by a constant 50 each year." },
            ],
          },
          {
            q: "4. A telecom recharge of ₹600 is reduced by ₹15 each day.",
            parts: [
              { label: "(i)", question: "Write an equation for remaining balance b(x) after x days.", solution: "b(x) = 600 − 15x. This is linear decay since balance decreases by constant ₹15 daily." },
              { label: "(ii)", question: "After how many days will the balance run out?", solution: "600 − 15x = 0 → x = 600/15 = 40 days." },
              { label: "(iii)", question: "Make a table for x = 1 to 10 days.", solution: "x: 1,2,3,4,5,6,7,8,9,10 | b(₹): 585,570,555,540,525,510,495,480,465,450" },
            ],
          },
        ],
      },
      {
        title: "Exercise Set 2.5",
        questions: [
          {
            q: "1. A learning platform charges a fixed monthly fee plus ₹ per module. When 10 modules → ₹400; when 14 modules → ₹500. Find a and b in y = ax + b.",
            solution: "System of equations: 10a + b = 400 ... (1) and 14a + b = 500 ... (2). Subtract (1) from (2): 4a = 100 → a = 25. From (1): b = 400 − 250 = 150. So y = 25x + 150 (fixed fee ₹150, ₹25 per module).",
          },
          {
            q: "2. A gym charges fixed fee + cost per hour of badminton court. 10 hours → ₹800; 15 hours → ₹1100. Find a and b in y = ax + b.",
            solution: "10a + b = 800 ... (1) and 15a + b = 1100 ... (2). Subtracting: 5a = 300 → a = 60. From (1): b = 800 − 600 = 200. So y = 60x + 200 (₹200 fixed fee, ₹60/hour).",
          },
          {
            q: "3. The relationship between °C and °F is °C = a°F + b. Ice melts at 0°C = 32°F. Water boils at 100°C = 212°F. Find a and b.",
            solution: "When °F = 32, °C = 0: 0 = 32a + b → b = −32a ... (1). When °F = 212, °C = 100: 100 = 212a + b = 212a − 32a = 180a → a = 100/180 = 5/9. Then b = −32(5/9) = −160/9. So °C = (5/9)°F − 160/9 = (5/9)(°F − 32).",
          },
        ],
      },
      {
        title: "End-of-Chapter Exercises",
        questions: [
          {
            q: "1. Write a polynomial of degree 3 in x, where the coefficient of x² is −7.",
            solution: "Example: 4x³ − 7x² + 3x − 1. (Degree 3, coefficient of x² is −7.)",
          },
          {
            q: "2. Find the values of the polynomials at indicated values:",
            parts: [
              { label: "(i)", question: "5x² − 3x + 7 if x = 1", solution: "5(1)² − 3(1) + 7 = 5 − 3 + 7 = 9" },
              { label: "(ii)", question: "4t³ − t² + 6 if t = a", solution: "4a³ − a² + 6" },
            ],
          },
          {
            q: "3. If we multiply a number by 2 and add 3 to the product, we get −7/12. Find the number.",
            solution: "Let the number = x. 2x + 3 = −7/12 → 2x = −7/12 − 3 = −7/12 − 36/12 = −43/12 → x = −43/24.",
          },
          {
            q: "4. A positive number is 5 times another number. If 21 is added to both, one of the new numbers becomes twice the other new number. What are the numbers?",
            solution: "Let the smaller number = x. Larger = 5x. After adding 21: 5x + 21 = 2(x + 21) → 5x + 21 = 2x + 42 → 3x = 21 → x = 7. Numbers are 7 and 35.",
          },
          {
            q: "5. If you have ₹800 and save ₹250 every month, find the amount after (i) 6 months, (ii) 2 years.",
            parts: [
              { label: "(i)", question: "After 6 months", solution: "Amount = 800 + 250(6) = 800 + 1500 = ₹2,300" },
              { label: "(ii)", question: "After 2 years (24 months)", solution: "Amount = 800 + 250(24) = 800 + 6000 = ₹6,800" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Chapter 3",
    subtitle: "The World of Numbers",
    exerciseSets: [
      {
        title: "Exercise Set 3.1",
        questions: [
          {
            q: "1. A merchant receives 15 copper ingots for every 2 bags of spices. If he brings 12 bags, how many ingots will he get?",
            solution: "Rate: 15 ingots per 2 bags = 7.5 ingots per bag. For 12 bags: 12 × (15/2) = 12 × 7.5 = 90 ingots.",
          },
          {
            q: "2. Look at the sequence 11, 13, 17, 19. What do these numbers have in common? List the next three numbers that fit the pattern.",
            solution: "These are consecutive prime numbers. All are prime (divisible only by 1 and themselves). Next three primes: 23, 29, 31.",
          },
          {
            q: "3. Natural Numbers are closed under addition. Are they closed under subtraction? Provide examples.",
            solution: "No. Natural numbers are NOT closed under subtraction. Example: 3 − 5 = −2, which is not a natural number. Another: 1 − 4 = −3, not a natural number. Subtraction can give negative results, which are outside the set of natural numbers.",
          },
          {
            q: "*4. Each finger has 3 joints and the thumb is used to count them. How many can you count on one hand? How does this relate to ancient base-12 counting?",
            solution: "Four fingers × 3 joints each = 12 counts per hand. The thumb points to each joint. This gives a base-12 (duodecimal) system. Ancient Indians and other cultures used this to count up to 12 on one hand, which is why we have 12 inches in a foot, 12 months in a year, and 60 (= 12 × 5) minutes in an hour.",
          },
        ],
      },
      {
        title: "Exercise Set 3.2",
        questions: [
          {
            q: "1. The temperature in Ladakh is 4°C at noon. By midnight it drops by 15°C. What is the midnight temperature?",
            solution: "Midnight temperature = 4 − 15 = −11°C.",
          },
          {
            q: "2. A spice trader takes a loan of ₹850. Next day he makes a profit of ₹1,200. The following week he incurs a loss of ₹450. Write as an equation and calculate his final financial standing.",
            solution: "Final = −850 + 1200 − 450 = −100. His final financial standing is a debt of ₹100 (−₹100).",
          },
          {
            q: "3. Calculate the following using Brahmagupta's laws:",
            parts: [
              { label: "(i)", question: "(−12) × 5", solution: "(−12) × 5 = −60 (negative × positive = negative)" },
              { label: "(ii)", question: "(−8) × (−7)", solution: "(−8) × (−7) = 56 (negative × negative = positive)" },
              { label: "(iii)", question: "0 − (−14)", solution: "0 − (−14) = 0 + 14 = 14" },
              { label: "(iv)", question: "(−20) ÷ 4", solution: "(−20) ÷ 4 = −5 (negative ÷ positive = negative)" },
            ],
          },
          {
            q: "4. Explain, using a real-world example of debt, why subtracting a negative number is the same as adding a positive number (e.g., 10 − (−5) = 15).",
            solution: "Imagine you have ₹10. Someone removes a debt of ₹5 (i.e., subtracts −₹5). Removing a debt means you now owe ₹5 less, so you effectively gain ₹5. Result: 10 + 5 = ₹15. Subtracting a negative (removing a debt) is the same as adding a positive (gaining money). Hence 10 − (−5) = 10 + 5 = 15.",
          },
        ],
      },
      {
        title: "End-of-Chapter Exercises",
        questions: [
          {
            q: "1. Convert the following to terminating or non-terminating repeating decimal:",
            parts: [
              { label: "(i)", question: "3/50", solution: "3/50 = 0.06 (terminating, since denominator = 2 × 5²)" },
              { label: "(ii)", question: "2/9", solution: "2/9 = 0.222… = 0.2̄ (non-terminating repeating)" },
            ],
          },
          {
            q: "2. Prove that √5 is an irrational number.",
            solution: "Assume √5 = p/q in lowest form (p, q integers, q ≠ 0, gcd(p,q) = 1). Then p² = 5q², so 5 | p² → 5 | p. Let p = 5m. Then 25m² = 5q² → q² = 5m² → 5 | q. But this contradicts gcd(p, q) = 1. Hence √5 is irrational.",
          },
          {
            q: "3. Convert the following decimals to p/q form:",
            parts: [
              { label: "(i)", question: "12.6", solution: "12.6 = 126/10 = 63/5" },
              { label: "(ii)", question: "0.0120", solution: "0.0120 = 120/10000 = 3/250" },
              { label: "(iii)", question: "3.052", solution: "3.052 = 3052/1000 = 763/250" },
              { label: "(v)", question: "0.23̄ (0.2333...)", solution: "Let x = 0.2333... → 10x = 2.333... → 100x = 23.333... → 100x − 10x = 21 → x = 21/90 = 7/30" },
            ],
          },
          {
            q: "5. Find 6 rational numbers between 3 and 4.",
            solution: "Multiply both by 7: 21/7 and 28/7. Six rational numbers: 22/7, 23/7, 24/7, 25/7, 26/7, 27/7.",
          },
          {
            q: "6. Find 5 rational numbers between 2/5 and 3/5.",
            solution: "Multiply both by 6: 12/30 and 18/30. Five rational numbers: 13/30, 14/30, 15/30, 16/30, 17/30 → i.e., 13/30, 7/15, 1/2, 8/15, 17/30.",
          },
          {
            q: "8. If x/3 + x/5 = 16/15, find the rational number x.",
            solution: "x/3 + x/5 = 16/15. LCM of 3 and 5 is 15. (5x + 3x)/15 = 16/15 → 8x = 16 → x = 2.",
          },
          {
            q: "11. Without performing division, determine whether 18/125 is terminating or non-terminating. If it terminates, state the number of decimal places.",
            solution: "125 = 5³. Since the denominator has only factors of 5 (and 2⁰), it is a terminating decimal. 18/125 = 18 × 2³ / (5³ × 2³) = 144/1000 = 0.144. It terminates in 3 decimal places.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Chapter 4",
    subtitle: "Exploring Algebraic Identities",
    exerciseSets: [
      {
        title: "Exercise Set 4.1",
        questions: [
          {
            q: "1. Using the identity (a + b)² = a² + 2ab + b², expand the following:",
            parts: [
              { label: "(i)", question: "(7x + 4y)²", solution: "(7x)² + 2(7x)(4y) + (4y)² = 49x² + 56xy + 16y²" },
              { label: "(ii)", question: "(3x/2 + 7y/5)²", solution: "9x²/4 + 2(3x/2)(7y/5) + 49y²/25 = 9x²/4 + 21xy/5 + 49y²/25" },
              { label: "(iii)", question: "(2.5p + 1.5q)²", solution: "(2.5p)² + 2(2.5p)(1.5q) + (1.5q)² = 6.25p² + 7.5pq + 2.25q²" },
              { label: "(iv)", question: "(3s/4 + 8t)²", solution: "9s²/16 + 2(3s/4)(8t) + 64t² = 9s²/16 + 12st + 64t²" },
              { label: "(v)", question: "(x + 1/(2y))²", solution: "x² + 2(x)(1/2y) + 1/(4y²) = x² + x/y + 1/(4y²)" },
              { label: "(vi)", question: "(1/x + 1/y)²", solution: "1/x² + 2/(xy) + 1/y²" },
            ],
          },
          {
            q: "2. Using the same identity, find the values:",
            parts: [
              { label: "(i)", question: "(64)²", solution: "(60 + 4)² = 3600 + 480 + 16 = 4096" },
              { label: "(ii)", question: "(105)²", solution: "(100 + 5)² = 10000 + 1000 + 25 = 11025" },
              { label: "(iii)", question: "(205)²", solution: "(200 + 5)² = 40000 + 2000 + 25 = 42025" },
            ],
          },
        ],
      },
      {
        title: "Exercise Set 4.3",
        questions: [
          {
            q: "1. Find the following squares using suitable identities:",
            parts: [
              { label: "(i)", question: "117²", solution: "(120 − 3)² = 14400 − 720 + 9 = 13689" },
              { label: "(ii)", question: "78²", solution: "(80 − 2)² = 6400 − 320 + 4 = 6084" },
              { label: "(iii)", question: "198²", solution: "(200 − 2)² = 40000 − 800 + 4 = 39204" },
              { label: "(iv)", question: "214²", solution: "(200 + 14)² = 40000 + 5600 + 196 = 45796" },
              { label: "(v)", question: "1104²", solution: "(1100 + 4)² = 1210000 + 8800 + 16 = 1218816" },
              { label: "(vi)", question: "1120²", solution: "(1100 + 20)² = 1210000 + 44000 + 400 = 1254400" },
            ],
          },
          {
            q: "2. Factor using suitable identities:",
            parts: [
              { label: "(i)", question: "16y² − 24y + 9", solution: "(4y)² − 2(4y)(3) + 3² = (4y − 3)²" },
              { label: "(ii)", question: "9s²/4 + st + 4t²", solution: "(3s/2)² + 2(3s/2)(t) + (2t)² − hmm. Let's check: (3s/2 + 2t)² = 9s²/4 + 6st/2 + 4t² = 9s²/4 + 3st + 4t². But coefficient of st is 1, not 3. So rewrite: 9s²/4 + st + 4t² doesn't factor as a perfect square. Check if (3s/2 − 2t)²: 9s²/4 − 6st + 4t² ≠. This doesn't factor as a simple perfect square." },
              { label: "(v)", question: "9a² + 4b² + c² − 12ab + 6ac − 4bc", solution: "= (3a)² + (−2b)² + (c)² + 2(3a)(−2b) + 2(3a)(c) + 2(−2b)(c) = (3a − 2b + c)²" },
            ],
          },
          {
            q: "3. Expand (p + 3q + 7r)² using (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca.",
            solution: "p² + 9q² + 49r² + 2(p)(3q) + 2(3q)(7r) + 2(7r)(p) = p² + 9q² + 49r² + 6pq + 42qr + 14pr",
          },
        ],
      },
      {
        title: "End-of-Chapter Exercises",
        questions: [
          {
            q: "1. Use suitable identities to find the following products:",
            parts: [
              { label: "(i)", question: "(−3x + 4)²", solution: "(−3x)² + 2(−3x)(4) + 4² = 9x² − 24x + 16" },
              { label: "(ii)", question: "(2s + 7)(2s − 7)", solution: "(2s)² − 7² = 4s² − 49" },
              { label: "(iii)", question: "(p² + 1/2)(p² − 1/2)", solution: "(p²)² − (1/2)² = p⁴ − 1/4" },
              { label: "(iv)", question: "(2n + 7)(2n − 7)", solution: "4n² − 49" },
            ],
          },
          {
            q: "2. Find the values using suitable identities:",
            parts: [
              { label: "(i)", question: "17 × 21", solution: "(19 − 2)(19 + 2) = 19² − 4 = 361 − 4 = 357. Or: (20−3)(20+1) = 400 + 20 − 60 − 3 = 357" },
              { label: "(ii)", question: "104 × 96", solution: "(100 + 4)(100 − 4) = 100² − 4² = 10000 − 16 = 9984" },
              { label: "(iii)", question: "24 × 16", solution: "(20 + 4)(20 − 4) = 400 − 16 = 384" },
              { label: "(iv)", question: "147³", solution: "(150 − 3)³ = 150³ − 3(150²)(3) + 3(150)(9) − 27 = 3375000 − 202500 + 4050 − 27 = 3176523" },
              { label: "(v)", question: "199³", solution: "(200 − 1)³ = 8000000 − 3(40000) + 3(200) − 1 = 8000000 − 120000 + 600 − 1 = 7880599" },
            ],
          },
          {
            q: "3. Factor the following algebraic expressions:",
            parts: [
              { label: "(i)", question: "4y² + 1 + (1/4y)", solution: "Rewrite: 4y² + 4y(1/4y) ... Actually: 4y² + 1/4 needs checking. If 4y² + 1 + 4y... = (2y+1)² check: 4y²+4y+1. So if expression is 4y² + 4y + 1 = (2y+1)²." },
              { label: "(iii)", question: "27b³ − 1/64b³", solution: "(3b)³ − (1/4b)³ = (3b − 1/4b)[(3b)² + (3b)(1/4b) + (1/4b)²] = (3b − 1/4b)(9b² + 3/4 + 1/16b²)" },
              { label: "(viii)", question: "9m² − 12m + 4", solution: "(3m)² − 2(3m)(2) + 2² = (3m − 2)²" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Chapter 5",
    subtitle: "I'm Up and Down, and Round and Round (Circles)",
    exerciseSets: [
      {
        title: "End-of-Chapter Exercises",
        questions: [
          {
            q: "1. In a circle, a chord is 5 cm away from the centre. If the radius is 13 cm, what is the length of the chord?",
            diagram: "chord-radius-13",
            solution: "Given: radius r = 13 cm, perpendicular distance from centre O to chord = d = 5 cm.\nThe perpendicular from the centre bisects the chord.\nStep 1: Using Pythagoras theorem in the right triangle formed:\n        (half-chord)² + d² = r²\n        (half-chord)² + 5² = 13²\n        (half-chord)² = 169 − 25 = 144\nStep 2: half-chord = √144 = 12 cm\nStep 3: Full chord = 2 × 12 = 24 cm\n∴ Length of the chord = 24 cm.",
          },
          {
            q: "2. An arc of a circle subtends an angle of 70° at the centre. What is the angle subtended at a point on the circle?",
            solution: "Theorem: The angle subtended by an arc at the centre is double the angle subtended at any point on the remaining part of the circle.\nStep 1: Central angle = 70°\nStep 2: Inscribed angle = Central angle ÷ 2 = 70° ÷ 2 = 35°\n∴ The angle subtended at a point on the circle = 35°.",
          },
          {
            q: "3. The diameter of a circle is 26 cm. A chord of length 24 cm is drawn. Find the distance from the centre to the chord.",
            diagram: "chord-distance",
            solution: "Given: diameter = 26 cm, so radius r = 13 cm. Chord length = 24 cm.\nThe perpendicular from the centre bisects the chord.\nStep 1: Half-chord = 24 ÷ 2 = 12 cm\nStep 2: Using Pythagoras theorem:\n        d² + (half-chord)² = r²\n        d² + 12² = 13²\n        d² = 169 − 144 = 25\nStep 3: d = √25 = 5 cm\n∴ Distance from the centre to the chord = 5 cm.",
          },
          {
            q: "4. A circle has a radius of 15 cm. A chord is drawn. The distance from the centre to the chord is 9 cm. What is the length of the chord?",
            diagram: "chord-r15-d9",
            solution: "Given: r = 15 cm, perpendicular distance from centre to chord d = 9 cm.\nStep 1: Using Pythagoras theorem:\n        (half-chord)² + d² = r²\n        (half-chord)² + 9² = 15²\n        (half-chord)² = 225 − 81 = 144\nStep 2: half-chord = √144 = 12 cm\nStep 3: Full chord = 2 × 12 = 24 cm\n∴ Length of the chord = 24 cm.",
          },
          {
            q: "5. Prove that the perpendicular bisector of a chord passes through the centre of the circle.",
            solution: "Given: Chord AB in a circle with centre O.\nTo prove: The perpendicular bisector of AB passes through O.\nProof:\nStep 1: Let M be the midpoint of AB (so AM = MB).\nStep 2: Join OA and OB. Since OA = OB = radius r, triangle OAB is isosceles.\nStep 3: In an isosceles triangle, the line from the apex (O) to the midpoint of the base (M) is perpendicular to the base.\nStep 4: Therefore OM ⊥ AB, which means OM is the perpendicular bisector of AB.\nStep 5: Since O lies on OM, the perpendicular bisector of chord AB passes through the centre O.\n∴ Proved.",
          },
          {
            q: "6. The diameter of a circle is AB. Point C is on the circumference. What is the measure of ∠ACB?",
            diagram: "inscribed-semicircle",
            solution: "Given: AB is the diameter, C is any point on the circle.\nTheorem used: Angle in a semicircle = 90° (Thales' theorem).\nStep 1: AB subtends a central angle = 180° (since AB is a diameter, it passes through centre O).\nStep 2: By the Inscribed Angle Theorem:\n        Inscribed angle = (1/2) × Central angle\n        ∠ACB = (1/2) × 180° = 90°\n∴ ∠ACB = 90° — the angle in a semicircle is always a right angle.",
          },
          {
            q: "7. ABCD is a cyclic quadrilateral. If ∠A = 75°, find ∠C. If ∠B = 110°, find ∠D.",
            diagram: "cyclic-quad",
            solution: "Theorem: Opposite angles of a cyclic quadrilateral are supplementary (add up to 180°).\nStep 1: ∠A + ∠C = 180°\n        75° + ∠C = 180°\n        ∠C = 180° − 75° = 105°\nStep 2: ∠B + ∠D = 180°\n        110° + ∠D = 180°\n        ∠D = 180° − 110° = 70°\n∴ ∠C = 105° and ∠D = 70°.",
          },
          {
            q: "8. Quadrilateral PQRS is inscribed in a circle. ∠P = (2x + 10)° and ∠R = (3x − 20)°. Find x and the measures of ∠P and ∠R.",
            solution: "Theorem: Opposite angles of a cyclic quadrilateral are supplementary.\nStep 1: ∠P + ∠R = 180°\n        (2x + 10) + (3x − 20) = 180\n        5x − 10 = 180\nStep 2: 5x = 190\n        x = 38\nStep 3: ∠P = 2(38) + 10 = 76 + 10 = 86°\n        ∠R = 3(38) − 20 = 114 − 20 = 94°\nVerification: 86° + 94° = 180° ✓\n∴ x = 38, ∠P = 86°, ∠R = 94°.",
          },
          {
            q: "9. The distance of a chord of length 16 cm from the centre of a circle is 6 cm. Find the radius.",
            diagram: "chord-distance",
            solution: "Given: chord length = 16 cm, perpendicular distance from centre to chord = 6 cm.\nStep 1: Since the perpendicular from the centre bisects the chord:\n        half-chord = 16 ÷ 2 = 8 cm\nStep 2: Using Pythagoras theorem:\n        r² = (half-chord)² + d²\n        r² = 8² + 6²\n        r² = 64 + 36 = 100\nStep 3: r = √100 = 10 cm\n∴ Radius of the circle = 10 cm.",
          },
          {
            q: "10. A cyclic quadrilateral has sides 5, 5, 12, 12 units. Find its area.",
            solution: "Step 1: A quadrilateral with sides 5, 12, 5, 12 is a rectangle (opposite sides equal).\n        A rectangle can always be inscribed in a circle (its diagonals are diameters).\nStep 2: Verify it is a rectangle:\n        Diagonal = √(5² + 12²) = √(25 + 144) = √169 = 13 units (both diagonals equal = diameter).\nStep 3: Area of rectangle = length × breadth = 12 × 5 = 60 sq. units\n∴ Area of the cyclic quadrilateral = 60 sq. units.",
          },
          {
            q: "18. Two parallel chords of lengths 10 cm and 24 cm are on the same side of the centre. The distance between the chords is 7 cm. Find the radius.",
            diagram: "parallel-chords",
            solution: "Given: Chord₁ = 24 cm, Chord₂ = 10 cm, both on the same side of centre. Distance between chords = 7 cm.\nLet d₁ = distance from centre O to chord₁ (24 cm), d₂ = distance from centre O to chord₂ (10 cm).\nSince both chords are on the same side: d₂ − d₁ = 7  ...(i)\n\nStep 1: Using Pythagoras for chord₁ (half-chord = 12):\n        r² = d₁² + 12²  ...(ii)\n\nStep 2: Using Pythagoras for chord₂ (half-chord = 5):\n        r² = d₂² + 5²  ...(iii)\n\nStep 3: From (ii) and (iii):\n        d₁² + 144 = d₂² + 25\n        d₂² − d₁² = 119\n        (d₂ − d₁)(d₂ + d₁) = 119\n\nStep 4: Substituting d₂ − d₁ = 7:\n        7 × (d₂ + d₁) = 119\n        d₂ + d₁ = 17  ...(iv)\n\nStep 5: Solving (i) and (iv):\n        d₁ = (17 − 7)/2 = 5 cm\n        d₂ = (17 + 7)/2 = 12 cm\n\nStep 6: r² = d₁² + 12² = 25 + 144 = 169\n        r = 13 cm\n∴ Radius of the circle = 13 cm.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Chapter 6",
    subtitle: "Measuring Space: Perimeter and Area",
    exerciseSets: [
      {
        title: "End-of-Chapter Exercises",
        questions: [
          {
            q: "2. An isosceles triangle has perimeter 40 cm; the equal sides are 15 cm each. Find the area.",
            diagram: "isosceles-40-15",
            solution: "Given: Perimeter = 40 cm, equal sides = 15 cm each.\nStep 1: Base = Perimeter − 2 × equal side = 40 − 15 − 15 = 10 cm\nStep 2: Draw perpendicular from apex to base. It bisects the base.\n        Half-base = 10 ÷ 2 = 5 cm\nStep 3: Height h using Pythagoras:\n        h² + 5² = 15²\n        h² = 225 − 25 = 200\n        h = √200 = 10√2 cm ≈ 14.14 cm\nStep 4: Area = (1/2) × base × height\n        = (1/2) × 10 × 10√2\n        = 50√2 ≈ 70.71 cm²\n∴ Area of the isosceles triangle = 50√2 ≈ 70.71 cm².",
          },
          {
            q: "3. An isosceles triangle has base 10 cm and area 60 cm². What are the lengths of the equal sides?",
            diagram: "isosceles-base10",
            solution: "Given: Base = 10 cm, Area = 60 cm².\nStep 1: Find the height:\n        Area = (1/2) × base × height\n        60 = (1/2) × 10 × h\n        60 = 5h\n        h = 12 cm\nStep 2: The perpendicular height bisects the base → half-base = 5 cm.\nStep 3: Find the equal side using Pythagoras:\n        (equal side)² = h² + (half-base)²\n        = 12² + 5²\n        = 144 + 25 = 169\n        equal side = √169 = 13 cm\n∴ Each equal side = 13 cm.",
          },
          {
            q: "4. The area of a right-angled triangle is 54 sq. cm. One leg is 12 cm. Find its perimeter.",
            diagram: "right-triangle-12-9-15",
            solution: "Given: Area = 54 cm², one leg = 12 cm.\nStep 1: Find the other leg:\n        Area = (1/2) × leg₁ × leg₂\n        54 = (1/2) × 12 × leg₂\n        54 = 6 × leg₂\n        leg₂ = 9 cm\nStep 2: Find the hypotenuse using Pythagoras:\n        hypotenuse² = 12² + 9²\n        = 144 + 81 = 225\n        hypotenuse = √225 = 15 cm\nStep 3: Perimeter = leg₁ + leg₂ + hypotenuse\n        = 12 + 9 + 15 = 36 cm\n∴ Perimeter of the right-angled triangle = 36 cm.",
          },
          {
            q: "5. The sides of a triangle are in the ratio 2:3:4, and its perimeter is 45 cm. Find its area.",
            solution: "Step 1: Let sides be 2k, 3k, 4k.\n        Perimeter: 2k + 3k + 4k = 45\n        9k = 45 → k = 5\n        Sides: 10 cm, 15 cm, 20 cm\nStep 2: Use Heron's formula:\n        s = (10 + 15 + 20)/2 = 45/2 = 22.5 cm\nStep 3: Area = √[s(s−a)(s−b)(s−c)]\n        = √[22.5 × (22.5−10) × (22.5−15) × (22.5−20)]\n        = √[22.5 × 12.5 × 7.5 × 2.5]\n        = √5273.4375\n        ≈ 72.6 cm²\n∴ Area ≈ 72.6 cm².",
          },
          {
            q: "6. The sides of a triangle are 7 cm, 24 cm, 25 cm. Find the area in two different ways.",
            solution: "Method 1 — Check for right triangle (Pythagoras):\nStep 1: 7² + 24² = 49 + 576 = 625 = 25² ✓\n        It IS a right-angled triangle! (legs: 7, 24; hypotenuse: 25)\nStep 2: Area = (1/2) × base × height = (1/2) × 7 × 24 = 84 cm²\n\nMethod 2 — Heron's Formula:\nStep 1: s = (7 + 24 + 25)/2 = 56/2 = 28 cm\nStep 2: Area = √[28 × (28−7) × (28−24) × (28−25)]\n        = √[28 × 21 × 4 × 3]\n        = √7056 = 84 cm²\n∴ Area = 84 cm² (both methods agree).",
          },
          {
            q: "7. If the wheel of a bicycle has a diameter of 60 cm, find how far a cyclist will have travelled after the wheel has rotated 100 times.",
            solution: "Given: Diameter d = 60 cm, Rotations = 100.\nStep 1: Circumference of wheel = π × d = π × 60 = 60π cm\n        Using π ≈ 3.14159: C ≈ 188.50 cm\nStep 2: Distance in 100 rotations = 100 × C\n        = 100 × 60π = 6000π cm\n        ≈ 18849.6 cm ≈ 188.5 m\n∴ The cyclist travels approximately 188.5 m (or 6000π cm).",
          },
          {
            q: "8. Find the area of a quadrant of a circle whose circumference is 66 cm.",
            solution: "Given: Circumference = 66 cm. Find area of one quadrant.\nStep 1: 2πr = 66\n        r = 66/(2π) = 33/π\n        Using π = 22/7: r = 33 × 7/22 = 231/22 = 10.5 cm\nStep 2: Area of full circle = πr² = (22/7) × (10.5)² = (22/7) × 110.25\n        = 22 × 15.75 = 346.5 cm²\nStep 3: Area of one quadrant = 346.5/4 = 86.625 cm²\n∴ Area of the quadrant ≈ 86.63 cm².",
          },
          {
            q: "9. The wheel of a car has outer radius 28 cm. Calculate how far the car travels after one complete turn, and how many times the wheel turns during a journey of 1 km.",
            solution: "Given: r = 28 cm.\nStep 1: Distance per turn = Circumference = 2πr\n        = 2 × (22/7) × 28\n        = 2 × 22 × 4 = 176 cm\nStep 2: 1 km = 1000 m = 100,000 cm\n        Number of turns = 100,000 ÷ 176 ≈ 568.18 ≈ 568 turns\n∴ One turn = 176 cm. The wheel turns ≈ 568 times in 1 km.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Chapter 7",
    subtitle: "The Mathematics of Maybe: Introduction to Probability",
    exerciseSets: [
      {
        title: "End-of-Chapter Exercises",
        questions: [
          {
            q: "1. Fill in the blanks:",
            parts: [
              { label: "(i)", question: "The probability of an impossible event is _______.", solution: "0" },
              { label: "(ii)", question: "The set of all possible outcomes of a random experiment is called the __________.", solution: "Sample Space" },
              { label: "(iii)", question: "The probability of an event that is certain to happen is _______.", solution: "1" },
              { label: "(iv)", question: "Tossing a fair coin has a probability of ______ for getting heads.", solution: "1/2 (or 0.5)" },
            ],
          },
          {
            q: "2. In a survey of 50 students, 15 liked football. The frequency is 15. What is the relative frequency?",
            solution: "Relative frequency = 15/50 = 3/10 = 0.3",
          },
          {
            q: "3. Which of the following experiments have equally likely outcomes? Explain.",
            parts: [
              { label: "(i)", question: "A driver attempts to start a car. The car starts or does not start.", solution: "Not equally likely — the car starting depends on its condition. The two outcomes are not equally probable in general." },
              { label: "(ii)", question: "Tossing a fair coin once.", solution: "Equally likely — both heads and tails have probability 1/2." },
              { label: "(iii)", question: "Rolling a fair 6-sided die.", solution: "Equally likely — each of the 6 faces has probability 1/6." },
              { label: "(iv)", question: "Choosing a marble from a bag with 3 red and 7 blue marbles.", solution: "Not equally likely — P(red) = 3/10, P(blue) = 7/10. The outcomes are not equally likely." },
              { label: "(v)", question: "A baby is born. It is a boy or a girl.", solution: "Approximately equally likely — each has approximately probability 1/2, though in practice not exactly 50/50." },
            ],
          },
          {
            q: "4. Write the sample space and calculate the probability:",
            parts: [
              { label: "(i)", question: "Two coins tossed. P(at least one head)?", solution: "Sample space: {HH, HT, TH, TT}. Favourable: {HH, HT, TH} = 3. P(at least one head) = 3/4." },
              { label: "(ii)", question: "Cards numbered 1−10. P(even number)?", solution: "Even numbers: {2, 4, 6, 8, 10} = 5 outcomes. P(even) = 5/10 = 1/2." },
              { label: "(iii)", question: "Die rolled. P(number greater than 4)?", solution: "Favourable: {5, 6}. P(>4) = 2/6 = 1/3." },
              { label: "(iv)", question: "Bag: 3 red, 2 blue, 1 green. P(not red)?", solution: "Not red: {2 blue + 1 green} = 3. Total = 6. P(not red) = 3/6 = 1/2." },
              { label: "(v)", question: "Three coins tossed. P(exactly two heads)?", solution: "Sample space: {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}. Exactly two heads: {HHT, HTH, THH} = 3. P = 3/8." },
            ],
          },
          {
            q: "5. A bag has 3 candies: strawberry, lemon, and mint. One is picked at random. What is the probability of picking a strawberry candy?",
            solution: "P(strawberry) = 1/3.",
          },
          {
            q: "6. A child has 2 shirts (red, blue) and 3 pants (jeans, khakis, shorts). List all combinations.",
            solution: "Total combinations = 2 × 3 = 6. | Red + Jeans | Red + Khakis | Red + Shorts | Blue + Jeans | Blue + Khakis | Blue + Shorts |",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Chapter 8",
    subtitle: "Predicting What Comes Next: Exploring Sequences and Progressions",
    exerciseSets: [
      {
        title: "Exercise Set 8.1 — Arithmetic Progressions",
        questions: [
          {
            q: "Exercise: Consider the sequence 1, 4, 7, 10, 13, … Can you predict what comes next?",
            solution: "Common difference d = 4 − 1 = 3. Next terms: 13 + 3 = 16, then 19, 22. The nth term is tₙ = 1 + (n−1)×3 = 3n − 2.",
          },
          {
            q: "Exercise: Using the explicit rule uₙ = 2n − 1, find the 53rd term, the 100th term, and the 1000th term.",
            solution: "53rd term: 2(53) − 1 = 105. 100th term: 2(100) − 1 = 199. 1000th term: 2(1000) − 1 = 1999.",
          },
          {
            q: "Exercise: Consider the expression tₙ = 3n − 7. Find t₁, t₂, t₃, t₄, t₅.",
            solution: "t₁ = 3(1)−7 = −4. t₂ = 3(2)−7 = −1. t₃ = 3(3)−7 = 2. t₄ = 3(4)−7 = 5. t₅ = 3(5)−7 = 8. Sequence: −4, −1, 2, 5, 8 (AP with d = 3).",
          },
        ],
      },
      {
        title: "Exercise Set 8.2 — Geometric Progressions",
        questions: [
          {
            q: "Exercise: Check whether the following sequences are geometric: 2, 6, 18, 54, …",
            solution: "r = 6/2 = 3, 18/6 = 3, 54/18 = 3. Common ratio r = 3 (constant). Yes, it is a GP with first term a = 2 and r = 3.",
          },
          {
            q: "Exercise: Find the nth term of the GP: 3, 12, 48, 192, …",
            solution: "a = 3, r = 12/3 = 4. nth term: tₙ = ar^(n−1) = 3 × 4^(n−1).",
          },
        ],
      },
      {
        title: "End-of-Chapter Exercises",
        questions: [
          {
            q: "1. Find the 31st term of an AP whose 11th term is 38 and 16th term is 73.",
            solution: "t₁₁ = a + 10d = 38 and t₁₆ = a + 15d = 73. Subtracting: 5d = 35 → d = 7. a = 38 − 70 = −32. t₃₁ = a + 30d = −32 + 210 = 178.",
          },
          {
            q: "2. Determine the AP whose third term is 16 and whose 7th term exceeds the 5th term by 12.",
            solution: "t₇ − t₅ = 12 → 2d = 12 → d = 6. t₃ = a + 2d = a + 12 = 16 → a = 4. AP: 4, 10, 16, 22, 28, 34, 40, …",
          },
          {
            q: "*3. How many three-digit numbers are divisible by 7?",
            solution: "Smallest 3-digit multiple of 7: 105 (7×15). Largest: 994 (7×142). AP: a=105, l=994, d=7. n = ((994−105)/7) + 1 = (889/7) + 1 = 127 + 1 = 128 numbers.",
          },
          {
            q: "*4. How many multiples of 4 lie between 10 and 250?",
            solution: "Smallest multiple of 4 > 10: 12. Largest multiple of 4 < 250: 248. AP: a=12, l=248, d=4. n = ((248−12)/4) + 1 = (236/4) + 1 = 59 + 1 = 60 multiples.",
          },
          {
            q: "*7. Number of bacteria doubles every hour. Originally 30. How many at end of 2nd, 4th, and nth hour?",
            solution: "GP with a = 30, r = 2. At end of nth hour: tₙ = 30 × 2ⁿ. End of 2nd hour: 30 × 2² = 30 × 4 = 120. End of 4th hour: 30 × 2⁴ = 30 × 16 = 480. End of nth hour: 30 × 2ⁿ.",
          },
          {
            q: "*8. Sum of 4th and 8th terms of an AP is 24. Sum of 6th and 10th terms is 44. Find the first three terms.",
            solution: "t₄ + t₈ = (a+3d) + (a+7d) = 2a + 10d = 24 → a + 5d = 12 ... (1). t₆ + t₁₀ = (a+5d) + (a+9d) = 2a + 14d = 44 → a + 7d = 22 ... (2). Subtract (1) from (2): 2d = 10 → d = 5. a = 12 − 25 = −13. First three terms: −13, −8, −3.",
          },
          {
            q: "*9. Find the smallest value of n such that the sum of the first n natural numbers is greater than 1,000.",
            solution: "Sum = n(n+1)/2 > 1000 → n(n+1) > 2000. Try n = 44: 44×45 = 1980 < 2000. n = 45: 45×46 = 2070 > 2000. Smallest n = 45.",
          },
          {
            q: "*10. Which term of the GP 2, 8, 32, … is 131072?",
            solution: "a = 2, r = 4. tₙ = 2 × 4^(n−1) = 131072. 4^(n−1) = 65536 = 4⁸. n−1 = 8 → n = 9. It is the 9th term. Explicit: tₙ = 2 × 4^(n−1). Recursive: t₁ = 2, tₙ = 4 × tₙ₋₁.",
          },
        ],
      },
    ],
  },
];
