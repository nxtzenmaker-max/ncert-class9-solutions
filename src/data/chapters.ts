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
        title: "In-Text Questions (Before Exercise 1.1)",
        questions: [
          {
            q: "Fig. 1.2 shows the structure of the coordinate plane. Point B is on the x-axis, 4.5 units to the right of O. Point G is on the y-axis, 4.5 units below O. Point H is on the y-axis, 4 units above O. Write the coordinates of B, G and H.",
            diagram: "ch1-fig12-axes",
            solution:
              "Given: B is on the x-axis, 4.5 units to the right of O (right of O = positive x-direction).\nSince B lies ON the x-axis, its y-coordinate = 0.\nB = (4.5, 0).\nGiven: G is on the y-axis, 4.5 units below O (below O = negative y-direction).\nSince G lies ON the y-axis, its x-coordinate = 0.\nG = (0, −4.5).\nGiven: H is on the y-axis, 4 units above O (above O = positive y-direction).\nH = (0, 4).\n∴ B = (4.5, 0), G = (0, −4.5), H = (0, 4).",
          },
          {
            q: "A point P = (x, 0) lies on the x-axis. What can you say about the position of P if x is positive? If x is negative? Similarly, what about a point P = (0, y) on the y-axis?",
            solution:
              "Case 1: P = (x, 0) lies on the x-axis.\nIf x > 0 (positive), P lies to the right of the origin O.\nIf x < 0 (negative), P lies to the left of the origin O.\nCase 2: P = (0, y) lies on the y-axis.\nIf y > 0 (positive), P lies above the origin O.\nIf y < 0 (negative), P lies below the origin O.\n∴ The sign of the non-zero coordinate tells us the direction of the point from the origin along that axis.",
          },
        ],
      },
      {
        title: "Exercise Set 1.1",
        questions: [
          {
            q: "Fig. 1.3 shows Reiaan's room with points OABC marking its corners. The x- and y-axes are marked in the figure. Point O is the origin. Referring to Fig. 1.3, answer the following questions:",
            diagram: "ch1-fig13-room",
            parts: [
              {
                label: "(i)",
                question:
                  "If D₁R₁ represents the door to Reiaan's room, how far is the door from the left wall (the y-axis) of the room? How far is the door from the x-axis?",
                solution:
                  "Given: The door D₁R₁ lies along the bottom wall of the room, on the x-axis.\nFrom Fig. 1.3, D₁ = (8, 0) and R₁ = (11.5, 0).\nDistance of the door from the y-axis (left wall) = x-coordinate of D₁ = 8 units.\nSince the entire door D₁R₁ lies on the x-axis itself (y = 0 for both points), its distance from the x-axis = 0 units.\n∴ The door is 8 units from the left wall (y-axis), and 0 units from the x-axis (it lies on the x-axis).",
              },
              {
                label: "(ii)",
                question: "What are the coordinates of D₁?",
                solution:
                  "From Fig. 1.3, point D₁ lies on the x-axis, 8 units to the right of the origin O.\n∴ D₁ = (8, 0).",
              },
              {
                label: "(iii)",
                question:
                  "If R₁ is the point (11.5, 0), how wide is the door? Do you think this is a comfortable width for the room door? If a person in a wheelchair wants to enter the room, will he/she be able to do so easily?",
                solution:
                  "Given: D₁ = (8, 0) and R₁ = (11.5, 0).\nBoth points lie on the x-axis, so the width of the door = difference of their x-coordinates.\nWidth = x-coordinate of R₁ − x-coordinate of D₁ = 11.5 − 8 = 3.5 units.\nSince the scale used is 1 cm : 1 foot, the door is 3.5 feet (42 inches) wide.\nA standard interior door is about 3 feet (36 inches) wide, and wheelchair-accessible doors generally need a minimum clear width of about 2.7 feet (32 inches).\n∴ The door is 3.5 ft wide, which is comfortable and wide enough for a wheelchair user to enter easily.",
              },
              {
                label: "(iv)",
                question:
                  "If B₁ (0, 1.5) and B₂ (0, 4) represent the ends of the bathroom door, is the bathroom door narrower or wider than the room door?",
                solution:
                  "Given: B₁ = (0, 1.5) and B₂ = (0, 4). Both lie on the y-axis, so the door's width = difference of their y-coordinates.\nWidth of bathroom door = y-coordinate of B₂ − y-coordinate of B₁ = 4 − 1.5 = 2.5 units.\nFrom part (iii), width of room door = 3.5 units.\nCompare: 2.5 < 3.5.\n∴ The bathroom door (2.5 ft) is narrower than the room door (3.5 ft).",
              },
            ],
          },
          {
            q: "Think and Reflect: What are the standard widths for a room door? Look around your home and in school.",
            solution:
              "Standard interior room doors in Indian homes are typically about 3 ft (90 cm) wide, while bathroom doors are often narrower, around 2 to 2.5 ft (60–75 cm), since bathrooms are smaller spaces. Main entrance doors are usually wider, about 3.5 to 4 ft, to allow comfortable movement and furniture to pass through. (This is an observation-based activity — measure the doors around you and compare with these standard values.)",
          },
          {
            q: "Think and Reflect: Are the doors in your school suitable for people in wheelchairs?",
            solution:
              "For comfortable wheelchair access, a doorway should have a minimum clear width of about 32 inches (2.7 ft), and ideally 36 inches (3 ft) for easy manoeuvring. Check the doors in your school against this standard — if any doors are narrower than 2.7 ft, or have raised thresholds/steps, they would not be easily accessible to a wheelchair user. (This is an observation-based activity to be done in your own school.)",
          },
          {
            q: "Think and Reflect: What is the x-coordinate of a point on the y-axis? Is there a similar generalisation for a point on the x-axis?",
            solution:
              "Every point on the y-axis is of the form (0, y) — its x-coordinate is always 0, no matter how far up or down it is. For example, (0, 3), (0, −5), (0, 7.5) all lie on the y-axis.\nSimilarly, every point on the x-axis is of the form (x, 0) — its y-coordinate is always 0. For example, (4, 0), (−7, 0), (2.5, 0) all lie on the x-axis.\n∴ Points on the y-axis: x-coordinate = 0. Points on the x-axis: y-coordinate = 0.",
          },
          {
            q: "Think and Reflect: Does point Q(y, x) ever coincide with point P(x, y)? Justify your answer. If x ≠ y, then (x, y) ≠ (y, x); and (x, y) = (y, x) if and only if x = y. Is this claim true?",
            solution:
              "P(x, y) and Q(y, x) represent the same point only when their corresponding coordinates are equal, i.e., x = y and y = x — both conditions reduce to the single condition x = y.\nExample 1: If x = y = 3, then P = (3, 3) and Q = (3, 3). Here P and Q coincide.\nExample 2: If x = 2 and y = 5, then P = (2, 5) and Q = (5, 2). These are different points (P is in a different position from Q), so they do not coincide.\n∴ Yes, the claim is true: (x, y) = (y, x) if and only if x = y. Whenever x ≠ y, P and Q are always different points.",
          },
        ],
      },
      {
        title: "Quadrants (Fig. 1.4)",
        questions: [
          {
            q: "The axes divide the Cartesian plane into four parts called quadrants. In Fig. 1.4, point S(3, −5) is in Quadrant IV, and point Q(−5, 3) is in Quadrant II. Copy Fig. 1.4 and mark S and Q. Mark any point P in Quadrant I and any point R in Quadrant III, and write down their coordinates.",
            diagram: "ch1-fig14-quadrants",
            solution:
              "Sign convention for each quadrant:\nQuadrant I: x > 0, y > 0 — both coordinates positive.\nQuadrant II: x < 0, y > 0 — x negative, y positive.\nQuadrant III: x < 0, y < 0 — both coordinates negative.\nQuadrant IV: x > 0, y < 0 — x positive, y negative.\nChecking S(3, −5): x = 3 (positive), y = −5 (negative) → matches Quadrant IV. ✓\nChecking Q(−5, 3): x = −5 (negative), y = 3 (positive) → matches Quadrant II. ✓\nExample point P in Quadrant I: P(4, 2) — both coordinates positive.\nExample point R in Quadrant III: R(−4, −2) — both coordinates negative.\n∴ P(4, 2) lies in Quadrant I and R(−4, −2) lies in Quadrant III (any point following the correct sign pattern is a valid answer).",
          },
        ],
      },
      {
        title: "Exercise Set 1.2",
        questions: [
          {
            q: "On a graph sheet, mark the x-axis and y-axis and the origin O. Mark points from (−7, 0) to (13, 0) on the x-axis and from (0, −15) to (0, 12) on the y-axis. (Use the scale 1 cm = 1 unit.) Using Fig. 1.5, answer the given questions.",
            diagram: "ch1-fig15-fullplan",
            parts: [
              {
                label: "1(i)",
                question:
                  "Place Reiaan's rectangular study table with three of its feet at the points (8, 9), (11, 9) and (11, 7). Where will the fourth foot of the table be?",
                solution:
                  "Given three corners: (8, 9), (11, 9), (11, 7).\nFrom (8, 9) to (11, 9): same y-coordinate (9), so this is a horizontal side of length 11 − 8 = 3 units.\nFrom (11, 9) to (11, 7): same x-coordinate (11), so this is a vertical side of length 9 − 7 = 2 units.\nFor a rectangle, the fourth corner must share its x-coordinate with the first point (8) and its y-coordinate with the third point (7).\n∴ The fourth foot of the table will be at the point (8, 7).",
              },
              {
                label: "1(ii)",
                question: "Is this a good spot for the table?",
                solution:
                  "The table occupies the rectangle from (8, 7) to (11, 9) — well inside the bedroom, which spans from O(0,0) to B(12,10).\nIt is away from the bed (which extends from x = 0 to x = 6), away from the wardrobe (x = 3 to 7, y = 0 to 2), and away from the door D₁R₁ (x = 8 to 11.5, y = 0) and the right wall (x = 12).\n∴ Yes, this is a good spot — the table sits in open floor space, near the right wall, without blocking the bed, wardrobe, or doorway.",
              },
              {
                label: "1(iii)",
                question: "What is the width of the table? The length? Can you make out the height of the table?",
                solution:
                  "Width = difference of x-coordinates = 11 − 8 = 3 units (3 feet, using the scale 1 cm = 1 foot).\nLength = difference of y-coordinates = 9 − 7 = 2 units (2 feet).\nThe coordinate plan only shows the floor layout (a top, bird's-eye view) — it gives no information about how tall objects are.\n∴ Width = 3 ft, Length = 2 ft. The height of the table CANNOT be determined from this 2-D coordinate diagram.",
              },
              {
                label: "2",
                question:
                  "If the bathroom door has a hinge at B₁ and opens into the bedroom, will it hit the wardrobe? Are there any changes you would suggest if the door is made wider?",
                solution:
                  "Given: hinge at B₁(0, 1.5), door width = 2.5 units (from Exercise 1.1, part iv).\nWhen the door swings open into the bedroom, it sweeps a quarter-circle of radius 2.5 units centred at B₁(0, 1.5).\nThe wardrobe occupies the region x = 3 to 7, y = 0 to 2 — its nearest point to B₁ is at (3, 1.5), which is 3 units away along the x-axis.\nSince the door's swing radius (2.5 units) is less than the distance to the wardrobe (3 units), the open door will NOT reach the wardrobe.\nIf the door were made wider (radius ≥ 3 units), its swept arc could reach the wardrobe; in that case, the wardrobe would need to be shifted further right, or the door could be made to swing outward instead of into the bedroom.\n∴ With the current width, the door does not hit the wardrobe. A wider door (3 ft or more) would risk hitting it, so the wardrobe's position or the door's swing direction would need to change.",
              },
              {
                label: "3(i)",
                question: "Look at Reiaan's bathroom. What are the coordinates of the four corners O, F, R, and P of the bathroom?",
                solution:
                  "Reading directly off the grid in Fig. 1.5:\nO is the shared corner with the bedroom — O = (0, 0).\nF is directly above O, where the bathroom meets the bedroom's top-left corner — F = (0, 9).\nR is the top-left corner of the bathroom, 6 units to the left of F — R = (−6, 9).\nP is the bottom-left corner, directly below R — P = (−6, 0).\n∴ O = (0, 0), F = (0, 9), R = (−6, 9), P = (−6, 0). The bathroom is a rectangle 6 units wide and 9 units tall (6 ft × 9 ft).",
              },
              {
                label: "3(ii)",
                question: "What is the shape of the showering area SHWR in Reiaan's bathroom? Write the coordinates of the four corners.",
                solution:
                  "From Fig. 1.5, the four corners of the showering area are: S(−6, 6), H(−3, 6), W(−3, 9), R(−6, 9).\nSide SH: from (−6,6) to (−3,6) — horizontal, length 3.\nSide HW: from (−3,6) to (−3,9) — vertical, length 3.\nSide WR: from (−3,9) to (−6,9) — horizontal, length 3.\nSide RS: from (−6,9) to (−6,6) — vertical, length 3.\nAll four sides are equal in length (3 units) and adjacent sides are perpendicular (alternating horizontal/vertical).\n∴ SHWR is a square of side 3 units, with corners S(−6, 6), H(−3, 6), W(−3, 9), R(−6, 9).",
              },
              {
                label: "3(iii)",
                question:
                  "Mark off a 3 ft × 2 ft space for the washbasin and a 2 ft × 3 ft space for the toilet. Write the coordinates of the corners of these spaces.",
                solution:
                  "The remaining free floor of the bathroom (below the showering area) spans roughly from y = 0 to y = 6, x = −6 to 0.\nWashbasin (3 ft × 2 ft) — place it along the bottom-left wall: corners at (−6, 0), (−3, 0), (−3, 2), (−6, 2). Width along x = 3, height along y = 2. ✓ matches 3 ft × 2 ft.\nToilet (2 ft × 3 ft) — place it beside the washbasin: corners at (−3, 0), (−1, 0), (−1, 3), (−3, 3). Width along x = 2, height along y = 3. ✓ matches 2 ft × 3 ft.\n∴ Washbasin: (−6,0), (−3,0), (−3,2), (−6,2). Toilet: (−3,0), (−1,0), (−1,3), (−3,3). (Any non-overlapping placement of the correct dimensions within the bathroom is an acceptable answer.)",
              },
              {
                label: "4(i)",
                question:
                  "Reiaan's room door leads from the dining room which has length 18 ft and width 15 ft. The length of the dining room extends from point P to point A. Sketch the dining room and mark the coordinates of its corners.",
                diagram: "ch1-dining-room",
                solution:
                  "Given: the dining room's length (18 ft) runs from P to A, where A is already fixed at A(12, 0) (the bedroom's bottom-right corner, which is shared with the dining room).\nSince the length extends from P to A along the x-axis (horizontal direction), P must lie 18 units to the left of A.\nP = (12 − 18, 0) = (−6, 0).\n(Interestingly, this P coincides with the bathroom's corner P(−6,0) found earlier — showing the dining room runs along the entire bottom edge of the house, beneath both the bedroom and bathroom.)\nThe width of the dining room is 15 ft, extending downward (negative y-direction) from the P–A line.\nSo the other two corners are: (−6, −15) and (12, −15).\n∴ Dining room corners: P(−6, 0), A(12, 0), (12, −15), (−6, −15).",
              },
              {
                label: "4(ii)",
                question:
                  "Place a rectangular 5 ft × 3 ft dining table precisely in the centre of the dining room. Write down the coordinates of the feet of the table.",
                solution:
                  "Centre of the dining room = midpoint of its diagonal = midpoint of (−6, 0) and (12, −15) = ((−6+12)/2, (0+(−15))/2) = (3, −7.5).\nThe table is 5 ft (along x) × 3 ft (along y), centred at (3, −7.5).\nHalf-width = 5/2 = 2.5, Half-height = 3/2 = 1.5.\nFour corners = centre ± (half-width, half-height):\n(3 − 2.5, −7.5 − 1.5) = (0.5, −9)\n(3 + 2.5, −7.5 − 1.5) = (5.5, −9)\n(3 + 2.5, −7.5 + 1.5) = (5.5, −6)\n(3 − 2.5, −7.5 + 1.5) = (0.5, −6)\n∴ The four feet of the dining table are at (0.5, −9), (5.5, −9), (5.5, −6), (0.5, −6).",
              },
            ],
          },
        ],
      },
      {
        title: "Distance Between Two Points (Fig. 1.6 – 1.9)",
        questions: [
          {
            q: "Look at triangle ADM in Fig. 1.6, where A(3, 4), D(7, 1) and M(9, 6). Using Fig. 1.7, find the length of side AD using the Baudhāyana–Pythagoras Theorem.",
            diagram: "ch1-fig67-triangle",
            solution:
              "Step 1: Identify the horizontal and vertical shifts between A(3, 4) and D(7, 1).\nStep 2: Distance moved along the x-axis, CD = x-coordinate of D − x-coordinate of A = 7 − 3 = 4 units.\nStep 3: Distance moved along the y-axis, AC = y-coordinate of A − y-coordinate of D = 4 − 1 = 3 units.\nStep 4: Triangle ACD is right-angled at C (one side horizontal, one vertical), with AD as the hypotenuse.\nStep 5: By the Baudhāyana–Pythagoras Theorem: AD² = CD² + AC² = 4² + 3² = 16 + 9 = 25.\nStep 6: AD = √25 = 5 units.\n∴ AD = 5 units.",
          },
          {
            q: "Now find the lengths of the remaining two sides, DM and MA, of triangle ADM where A(3, 4), D(7, 1) and M(9, 6).",
            solution:
              "Step 1: For DM, between D(7, 1) and M(9, 6): horizontal shift = 9 − 7 = 2, vertical shift = 6 − 1 = 5.\nStep 2: DM = √(2² + 5²) = √(4 + 25) = √29 units.\nStep 3: For MA, between M(9, 6) and A(3, 4): horizontal shift = 9 − 3 = 6, vertical shift = 6 − 4 = 2.\nStep 4: MA = √(6² + 2²) = √(36 + 4) = √40 = 2√10 units.\n∴ DM = √29 units ≈ 5.39 units, and MA = √40 = 2√10 units ≈ 6.32 units.",
          },
          {
            q: "In general, the distance between two points (x₁, y₁) and (x₂, y₂) is given by the distance formula. State this formula and explain how Fig. 1.8 illustrates it.",
            solution:
              "For any two points A(x₁, y₁) and D(x₂, y₂), construct a right triangle by drawing a horizontal line from A and a vertical line from D, meeting at point F(x₁, y₂) (as in Fig. 1.8).\nHorizontal leg: FD = |x₂ − x₁|.\nVertical leg: AF = |y₂ − y₁|.\nBy the Baudhāyana–Pythagoras Theorem applied to right triangle AFD:\nAD² = (x₂ − x₁)² + (y₂ − y₁)².\n∴ Distance formula: AD = √[(x₂ − x₁)² + (y₂ − y₁)²]. This works for ANY two points in the plane, regardless of which quadrant they lie in.",
          },
          {
            q: "In Fig. 1.9, triangle ADM (A(3,4), D(7,1), M(9,6)) is reflected in the y-axis to form triangle A'D'M'. What are the coordinates of the images of points A, M, and D? Verify that reflection preserves the side lengths.",
            diagram: "ch1-fig19-reflection",
            solution:
              "Reflecting a point (x, y) in the y-axis gives the image (−x, y) — the y-coordinate stays the same, the x-coordinate changes sign.\nA(3, 4) → A'(−3, 4).\nD(7, 1) → D'(−7, 1).\nM(9, 6) → M'(−9, 6).\nVerifying side A'D': horizontal shift = |−3 − (−7)| = 4, vertical shift = |4 − 1| = 3. A'D' = √(4² + 3²) = √25 = 5 units — same as AD = 5 units. ✓\nVerifying side D'M': horizontal shift = |−7 − (−9)| = 2, vertical shift = |1 − 6| = 5. D'M' = √(2² + 5²) = √29 units — same as DM = √29 units. ✓\nVerifying side M'A': horizontal shift = |−9 − (−3)| = 6, vertical shift = |6 − 4| = 2. M'A' = √(6² + 2²) = √40 units — same as MA = √40 units. ✓\n∴ A' = (−3, 4), D' = (−7, 1), M' = (−9, 6). All three side lengths are unchanged after reflection — reflection preserves distances (it is a rigid transformation).",
          },
          {
            q: "Think and Reflect: What has remained the same and what has changed with this reflection? Would these observations be the same if ΔADM is reflected in the x-axis (instead of the y-axis)?",
            solution:
              "What remained the same: the side lengths (AD = 5, DM = √29, MA = √40) and the overall shape/size of the triangle (it is congruent to the original).\nWhat changed: the position of the triangle (it moved from Quadrant I to Quadrant II) and its orientation (the triangle is now a mirror image — its 'handedness' is flipped).\nIf ΔADM were reflected in the x-axis instead: each point (x, y) would map to (x, −y) instead of (−x, y). A(3,4)→(3,−4), D(7,1)→(7,−1), M(9,6)→(9,−6). The triangle would move into Quadrant IV instead of Quadrant II, but by the same reasoning as above, all side lengths would again be preserved (only the sign pattern of the shift changes, and squaring removes the sign).\n∴ Reflection (in either axis) always preserves side lengths — only the position and orientation of the figure change.",
          },
        ],
      },
      {
        title: "End-of-Chapter Exercises",
        questions: [
          {
            q: "1. What are the x-coordinate and y-coordinate of the point of intersection of the two axes?",
            solution:
              "The x-axis and y-axis intersect at exactly one point, called the origin, denoted O.\nBy definition, the origin is the point from which all distances are measured, so both its coordinates are zero.\n∴ x-coordinate = 0, y-coordinate = 0. The point of intersection is O(0, 0).",
          },
          {
            q: "2. Point W has x-coordinate equal to −5. Can you predict the coordinates of point H which is on the line through W parallel to the y-axis? Which quadrants can H lie in?",
            solution:
              "A line through W parallel to the y-axis is a vertical line — every point on it has the same x-coordinate as W, namely −5.\nSo H must be of the form H = (−5, k), where k can be any real number (the y-coordinate is free to vary).\nIf k > 0: H = (−5, k) has x < 0 and y > 0 → H lies in Quadrant II.\nIf k < 0: H = (−5, k) has x < 0 and y < 0 → H lies in Quadrant III.\nIf k = 0: H = (−5, 0) lies ON the x-axis, not in any quadrant.\n∴ H = (−5, k) for any real k. H can lie in Quadrant II (if k > 0) or Quadrant III (if k < 0).",
          },
          {
            q: "3. Consider the points R(3, 0), A(0, −2), M(−5, −2) and P(−5, 2). If they are joined in the same order, predict the following, then plot the points to verify:",
            diagram: "ch1-ramp",
            parts: [
              {
                label: "(i)",
                question: "Two sides of RAMP that are perpendicular to each other.",
                solution:
                  "Side AM: from A(0,−2) to M(−5,−2) — both points have the same y-coordinate (−2), so AM is a HORIZONTAL segment.\nSide MP: from M(−5,−2) to P(−5,2) — both points have the same x-coordinate (−5), so MP is a VERTICAL segment.\nA horizontal segment and a vertical segment are always perpendicular to each other.\n∴ Sides AM and MP are perpendicular to each other (AM ⊥ MP).",
              },
              {
                label: "(ii)",
                question: "One side of RAMP that is parallel to one of the axes.",
                solution:
                  "From part (i): AM is horizontal (constant y = −2) → AM is parallel to the x-axis.\nAlso, MP is vertical (constant x = −5) → MP is parallel to the y-axis.\n∴ Side AM is parallel to the x-axis, and side MP is parallel to the y-axis (both qualify as an answer).",
              },
              {
                label: "(iii)",
                question: "Two points that are mirror images of each other in one axis. Which axis will this be?",
                solution:
                  "Compare M(−5, −2) and P(−5, 2): they have the same x-coordinate (−5), and their y-coordinates are negatives of each other (−2 and 2).\nA reflection in the x-axis maps (x, y) → (x, −y) — exactly the relationship between M and P.\n∴ M(−5,−2) and P(−5,2) are mirror images of each other in the x-axis.",
              },
            ],
          },
          {
            q: "4. Plot point Z(5, −6) on the Cartesian plane. Construct a right-angled triangle IZN and find the lengths of the three sides. (Comment: Answers may differ from person to person.)",
            diagram: "ch1-z-triangle",
            solution:
              "Step 1: Plot Z(5, −6) — move 5 units right along the x-axis, then 6 units down (into Quadrant IV).\nStep 2: Choose I = (5, 0) on the x-axis, directly above Z (same x-coordinate), and N = (0, −6) on the y-axis, directly to the left of Z (same y-coordinate).\nStep 3: Side IZ is vertical (both have x = 5): IZ = |0 − (−6)| = 6 units.\nStep 4: Side ZN is horizontal (both have y = −6): ZN = |5 − 0| = 5 units.\nStep 5: The right angle is at Z, since IZ (vertical) ⊥ ZN (horizontal).\nStep 6: By the Baudhāyana–Pythagoras Theorem, hypotenuse IN = √(IZ² + ZN²) = √(6² + 5²) = √(36 + 25) = √61 ≈ 7.81 units.\n∴ IZ = 6 units, ZN = 5 units, IN = √61 ≈ 7.81 units.",
          },
          {
            q: "5. What would a system of coordinates be like if we did not have negative numbers? Would this system allow us to locate all the points on a 2-D plane?",
            solution:
              "Without negative numbers, both coordinates x and y could only take values ≥ 0.\nThis restricts every point to satisfy x ≥ 0 AND y ≥ 0 — which is exactly the condition for Quadrant I (including the boundary axes).\nPoints in Quadrant II (x < 0, y > 0), Quadrant III (x < 0, y < 0), and Quadrant IV (x > 0, y < 0) would all become impossible to represent.\n∴ No — such a system would only allow us to locate points in Quadrant I. It would NOT allow us to locate all the points on a 2-D plane; three out of the four quadrants would be inaccessible.",
          },
          {
            q: "*6. Are the points M(−3, −4), A(0, 0) and G(6, 8) on the same straight line? Suggest a method to check this without plotting and joining the points.",
            solution:
              "Method: Three points are collinear (lie on the same straight line) if and only if the slope between any two pairs of them is equal.\nStep 1: Slope of MA = (y-coordinate of A − y-coordinate of M) / (x-coordinate of A − x-coordinate of M) = (0 − (−4)) / (0 − (−3)) = 4/3.\nStep 2: Slope of AG = (8 − 0) / (6 − 0) = 8/6 = 4/3.\nStep 3: Since slope of MA = slope of AG = 4/3, and both segments share the common point A, the three points lie on the same line.\n∴ Yes, M, A and G are collinear. Method: compute the slope between two pairs of the points using slope = (y₂−y₁)/(x₂−x₁); if the slopes are equal (and a point is shared), the points are collinear.",
          },
          {
            q: "*7. Use your method (from Problem 6) to check if the points R(−5, −1), B(−2, −5) and C(4, −12) are on the same straight line. Now plot both sets of points and check your answers.",
            solution:
              "Step 1: Slope of RB = (−5 − (−1)) / (−2 − (−5)) = (−4) / (3) = −4/3.\nStep 2: Slope of BC = (−12 − (−5)) / (4 − (−2)) = (−7) / (6) = −7/6.\nStep 3: Compare: −4/3 = −8/6, but slope of BC = −7/6. Since −8/6 ≠ −7/6, the slopes are NOT equal.\n∴ R, B and C are NOT collinear (they do not lie on the same straight line) — unlike the points in Question 6, which were collinear.",
          },
          {
            q: "*8. Using the origin as one vertex, plot the vertices of:",
            parts: [
              {
                label: "(i)",
                question: "A right-angled isosceles triangle.",
                solution:
                  "Choose O(0, 0) as the right-angle vertex, and two other vertices equidistant from O along the axes, e.g., A(4, 0) and B(0, 4).\nOA = 4 units, OB = 4 units — these two legs are equal (isosceles condition), and they are perpendicular since one is along the x-axis and the other along the y-axis (right-angle condition).\n∴ O(0,0), A(4,0), B(0,4) form a right-angled isosceles triangle, right-angled at O, with equal legs OA = OB = 4 units. (Any equal, perpendicular pair of legs from O gives a valid answer.)",
              },
              {
                label: "(ii)",
                question: "An isosceles triangle with one vertex in Quadrant III and the other in Quadrant IV.",
                solution:
                  "Choose O(0, 0) as the apex, P(−3, −4) in Quadrant III (x < 0, y < 0), and Q(3, −4) in Quadrant IV (x > 0, y < 0) — chosen symmetrically about the y-axis so that OP = OQ.\nOP = √((−3)² + (−4)²) = √(9+16) = √25 = 5 units.\nOQ = √(3² + (−4)²) = √(9+16) = √25 = 5 units.\nSince OP = OQ = 5 units, triangle OPQ is isosceles.\n∴ O(0,0), P(−3,−4) [Quadrant III], Q(3,−4) [Quadrant IV] form a valid isosceles triangle with OP = OQ = 5 units.",
              },
            ],
          },
          {
            q: "*9. The following table shows the coordinates of points S, M and T. In each case, state whether M is the midpoint of segment ST. Justify your answer. When M is the mid-point of ST, can you find any connection between the coordinates of M, S and T?",
            diagram: "ch1-midpoint-table",
            parts: [
              {
                label: "Row 1",
                question: "S(−3, 0), M(0, 0), T(3, 0)",
                solution:
                  "Using the midpoint formula, the midpoint of ST = ((x₁+x₂)/2, (y₁+y₂)/2) = ((−3+3)/2, (0+0)/2) = (0, 0).\nThis matches the given M(0, 0).\n∴ Yes, M is the midpoint of ST.",
              },
              {
                label: "Row 2",
                question: "S(2, 3), M(3, 4), T(4, 5)",
                solution:
                  "Midpoint of ST = ((2+4)/2, (3+5)/2) = (6/2, 8/2) = (3, 4).\nThis matches the given M(3, 4).\n∴ Yes, M is the midpoint of ST.",
              },
              {
                label: "Row 3",
                question: "S(0, 0), M(0, 5), T(0, −10)",
                solution:
                  "Midpoint of ST = ((0+0)/2, (0+(−10))/2) = (0, −5).\nThe given M is (0, 5), but the calculated midpoint is (0, −5). These do not match.\n∴ No, M is NOT the midpoint of ST.",
              },
              {
                label: "Row 4",
                question: "S(−8, 7), M(0, −2), T(6, −3)",
                solution:
                  "Midpoint of ST = ((−8+6)/2, (7+(−3))/2) = (−2/2, 4/2) = (−1, 2).\nThe given M is (0, −2), but the calculated midpoint is (−1, 2). These do not match.\n∴ No, M is NOT the midpoint of ST.\nConnection: when M IS the midpoint of ST, the coordinates of M are exactly the average of the corresponding coordinates of S and T — that is, M = ((x_S + x_T)/2, (y_S + y_T)/2). This is the midpoint formula.",
              },
            ],
          },
          {
            q: "*10. Use the connection you found to find the coordinates of B given that M(−7, 1) is the midpoint of A(3, −4) and B(x, y).",
            solution:
              "Using the midpoint formula: M = ((x_A + x_B)/2, (y_A + y_B)/2).\nFor the x-coordinate: (3 + x)/2 = −7 → 3 + x = −14 → x = −17.\nFor the y-coordinate: (−4 + y)/2 = 1 → −4 + y = 2 → y = 6.\n∴ B = (−17, 6).",
          },
          {
            q: "*11. Let P, Q be points of trisection of AB, with P closer to A, and Q closer to B. Using your knowledge of how to find the coordinates of the midpoint of a segment, how would you find the coordinates of P and Q? Do this for the case when the points are A(4, 7) and B(16, −2).",
            solution:
              "Points of trisection divide AB into three equal parts. So P divides AB in the ratio AP : PB = 1 : 2, and Q divides AB in the ratio AQ : QB = 2 : 1.\nThis means P is located one-third of the way from A to B: P = A + (1/3)(B − A).\nAnd Q is located two-thirds of the way from A to B: Q = A + (2/3)(B − A).\nGiven A(4, 7), B(16, −2): B − A = (16−4, −2−7) = (12, −9).\nFor P: P = (4 + 12/3, 7 + (−9)/3) = (4 + 4, 7 − 3) = (8, 4).\nFor Q: Q = (4 + 2×12/3, 7 + 2×(−9)/3) = (4 + 8, 7 − 6) = (12, 1).\n∴ P = (8, 4) and Q = (12, 1).",
          },
          {
            q: "*12. (i) Given the points A(1, −8), B(−4, 7) and C(−7, −4), show that they lie on a circle K whose centre is the origin O(0, 0). What is the radius of circle K? (ii) Given the points D(−5, 6) and E(0, 9), check whether D and E lie within the circle, on the circle, or outside the circle K.",
            parts: [
              {
                label: "(i)",
                question: "Show A, B, C lie on circle K centred at O, and find its radius.",
                solution:
                  "Points lie on a circle centred at O if and only if they are all equidistant from O (that distance is the radius).\nOA = √(1² + (−8)²) = √(1 + 64) = √65.\nOB = √((−4)² + 7²) = √(16 + 49) = √65.\nOC = √((−7)² + (−4)²) = √(49 + 16) = √65.\nSince OA = OB = OC = √65, all three points are equidistant from O.\n∴ A, B and C all lie on a circle K centred at O(0,0), with radius √65 units (≈ 8.06 units).",
              },
              {
                label: "(ii)",
                question: "Check whether D(−5, 6) and E(0, 9) lie inside, on, or outside circle K.",
                solution:
                  "Compare each point's distance from O with the radius √65.\nOD = √((−5)² + 6²) = √(25 + 36) = √61.\nSince √61 < √65 (as 61 < 65), point D lies INSIDE circle K.\nOE = √(0² + 9²) = √81 = 9.\nSince 9 = √81 and 81 > 65, so √81 > √65, point E lies OUTSIDE circle K.\n∴ D(−5, 6) lies inside circle K; E(0, 9) lies outside circle K.",
              },
            ],
          },
          {
            q: "*13. The midpoints of the sides of triangle ABC are the points D, E, and F (D = midpoint of BC, E = midpoint of CA, F = midpoint of AB). Given that the coordinates of D, E, and F are (5, 1), (6, 5), and (0, 3), respectively, find the coordinates of A, B and C.",
            solution:
              "Key fact: when D, E, F are midpoints of BC, CA, AB respectively, the original vertices can be recovered using A = E + F − D, B = D + F − E, C = D + E − F.\n(This comes from the midpoint relations: D=(B+C)/2, E=(C+A)/2, F=(A+B)/2, solved simultaneously for A, B, C.)\nStep 1: A = E + F − D = (6+0−5, 5+3−1) = (1, 7).\nStep 2: B = D + F − E = (5+0−6, 1+3−5) = (−1, −1).\nStep 3: C = D + E − F = (5+6−0, 1+5−3) = (11, 3).\nVerification: midpoint of BC = midpoint of (−1,−1) and (11,3) = (5, 1) = D ✓. Midpoint of CA = midpoint of (11,3) and (1,7) = (6, 5) = E ✓. Midpoint of AB = midpoint of (1,7) and (−1,−1) = (0, 3) = F ✓.\n∴ A = (1, 7), B = (−1, −1), C = (11, 3).",
          },
          {
            q: "14. A city has two main roads which cross each other at the centre of the city, along the North–South and East–West directions. All other streets run parallel to these roads, 200 m apart, with 10 streets in each direction. A street intersection is named (a, b) if it is formed by the a-th N–S street and the b-th E–W street.",
            parts: [
              {
                label: "(i)",
                question: "Using 1 cm = 200 m, draw a model of the city in your notebook, representing roads/streets by single lines.",
                solution:
                  "Draw 10 vertical lines (representing the N–S streets) spaced 1 cm apart, and 10 horizontal lines (representing the E–W streets) spaced 1 cm apart, forming a 10×10 grid. Each grid line represents one street, and each 1 cm gap represents the real-world 200 m spacing between streets. (This is a notebook drawing activity.)",
              },
              {
                label: "(ii)(a)",
                question: "How many street intersections can be referred to as (4, 3)?",
                solution:
                  "An intersection labelled (a, b) is uniquely formed by ONE specific N–S street (the a-th one) crossing ONE specific E–W street (the b-th one).\nSince the 4th N–S street and the 3rd E–W street can only cross each other at exactly one point in the entire grid.\n∴ Only 1 street intersection can be referred to as (4, 3).",
              },
              {
                label: "(ii)(b)",
                question: "How many street intersections can be referred to as (3, 4)?",
                solution:
                  "By the same reasoning as part (a): the 3rd N–S street and the 4th E–W street cross at exactly one unique point.\nNote that (3, 4) refers to a DIFFERENT intersection from (4, 3), since the order (N–S street, E–W street) matters.\n∴ Only 1 street intersection can be referred to as (3, 4) — and it is a different point from intersection (4, 3).",
              },
            ],
          },
          {
            q: "15. A computer graphics program displays images on a rectangular screen whose coordinate system has the origin at the bottom-left corner. The screen is 800 pixels wide and 600 pixels high. A circular icon of radius 80 pixels is drawn with its centre at A(100, 150). Another circular icon of radius 100 pixels is drawn with its centre at B(250, 230). Determine:",
            parts: [
              {
                label: "(i)",
                question: "Whether any part of either circle lies outside the screen.",
                solution:
                  "Screen boundaries: 0 ≤ x ≤ 800, 0 ≤ y ≤ 600.\nCircle A (centre (100,150), radius 80): leftmost point x = 100−80 = 20 (≥0 ✓), rightmost x = 100+80 = 180 (≤800 ✓), bottom y = 150−80 = 70 (≥0 ✓), top y = 150+80 = 230 (≤600 ✓). Circle A is entirely within the screen.\nCircle B (centre (250,230), radius 100): leftmost x = 250−100 = 150 (≥0 ✓), rightmost x = 250+100 = 350 (≤800 ✓), bottom y = 230−100 = 130 (≥0 ✓), top y = 230+100 = 330 (≤600 ✓). Circle B is entirely within the screen.\n∴ Neither circle extends outside the screen — both fit completely within the 800×600 boundary.",
              },
              {
                label: "(ii)",
                question: "Whether the two circles intersect each other.",
                solution:
                  "Step 1: Distance between centres A(100,150) and B(250,230): d = √((250−100)² + (230−150)²) = √(150² + 80²) = √(22500 + 6400) = √28900 = 170.\nStep 2: Sum of radii = 80 + 100 = 180. Difference of radii = 100 − 80 = 20.\nStep 3: Two circles intersect (at two points) if the distance between centres is strictly between the difference and the sum of the radii: |r₁−r₂| < d < r₁+r₂.\nCheck: 20 < 170 < 180 ✓ — this condition is satisfied.\n∴ Yes, the two circles intersect each other (at two points), since the distance between their centres, 170, lies between the difference of radii (20) and sum of radii (180).",
              },
            ],
          },
          {
            q: "16. Plot the points A(2, 1), B(−1, 2), C(−2, −1), and D(1, −2) in the coordinate plane. Is ABCD a square? Can you explain why? What is the area of this square?",
            solution:
              "Step 1: Find all four side lengths using the distance formula.\nAB = √((2−(−1))² + (1−2)²) = √(3² + (−1)²) = √(9+1) = √10.\nBC = √((−1−(−2))² + (2−(−1))²) = √(1² + 3²) = √(1+9) = √10.\nCD = √((−2−1)² + (−1−(−2))²) = √((−3)² + 1²) = √(9+1) = √10.\nDA = √((1−2)² + (−2−1)²) = √((−1)² + (−3)²) = √(1+9) = √10.\nStep 2: All four sides are equal (AB = BC = CD = DA = √10), so ABCD is at least a rhombus.\nStep 3: Check the diagonals.\nAC = √((2−(−2))² + (1−(−1))²) = √(4² + 2²) = √(16+4) = √20.\nBD = √((−1−1)² + (2−(−2))²) = √((−2)² + 4²) = √(4+16) = √20.\nStep 4: Both diagonals are equal (AC = BD = √20). A rhombus with equal diagonals must have all angles equal to 90°, which makes it a square.\nStep 5: Area of a square using diagonals: Area = (1/2) × d₁ × d₂ = (1/2) × √20 × √20 = (1/2) × 20 = 10 square units. (This also matches side² = (√10)² = 10.)\n∴ Yes, ABCD is a square — all sides are equal (√10 units) and both diagonals are equal (√20 units), confirming all angles are right angles. Area = 10 square units.",
          },
        ],
      },
      {
        title: "Chapter Summary",
        questions: [
          {
            q: "Quick Revision: Key facts about the Cartesian coordinate system.",
            solution:
              "Two perpendicular lines are needed to locate any point in a plane: the horizontal x-axis and the vertical y-axis.\nThis plane is called the Cartesian plane, coordinate plane, or xy-plane; the two lines are the coordinate axes.\nThe axes divide the plane into four quadrants. The point where they meet is the origin O(0, 0).\nFor a point (x, y): x is its distance from the y-axis (measured along the x-axis), and y is its distance from the x-axis (measured along the y-axis).\nPoints on the x-axis have the form (x, 0); points on the y-axis have the form (0, y).\nSign pattern by quadrant: Quadrant I (+, +), Quadrant II (−, +), Quadrant III (−, −), Quadrant IV (+, −).\n(x, y) = (y, x) only when x = y; otherwise they are different points.\nDistance between (x₁, y) and (x₂, y) [same y] = |x₂ − x₁|. Distance between (x, y₁) and (x, y₂) [same x] = |y₂ − y₁|.\n∴ Distance formula (Baudhāyana–Pythagoras Theorem): distance between (x₁,y₁) and (x₂,y₂) = √[(x₂−x₁)² + (y₂−y₁)²].",
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
