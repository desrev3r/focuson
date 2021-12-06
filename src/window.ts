console.log("Window.js");

const handleSave = () => {
  const selection = document.getSelection();
  const data = JSON.stringify(selection?.toString());

  console.log(data);
};

const keyBindings = [
  //
  { key: "s", fn: handleSave },
];

document.addEventListener("keydown", ({ key, ctrlKey, altKey }) => {
  if (!(ctrlKey && altKey)) return;
  if (keyBindings.length <= 0) return;

  const binding = keyBindings.filter((b) => b.key === key)[0];
  if (!binding) return;

  return binding.fn();
});
