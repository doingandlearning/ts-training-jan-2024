function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    // runtime!
    return " ".repeat(padding) + input;
  }
  // padding is definitely a string!!

  return padding + input;
}

padLeft("£", "3.30"); // "£3.30"
padLeft(10, "Current PM"); // "          Current PM"
