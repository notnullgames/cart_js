export function update() {
  clear(BLACK)
  draw_rectangle(10, 10, 100, 50, RED)
  draw_rectangle(100, 50, 100, 50, YELLOW)
  draw_rectangle(200, 100, 100, 50, BLUE)
  draw_rectangle(300, 150, 200, 50, GREEN)
  draw_circle(400, 300, 50, LIME)
  if (key_down(KEY_SPACE)) {
    draw_text(FONT_DEFAULT, 'Space pressed!', 350, 300, WHITE)
  }
}