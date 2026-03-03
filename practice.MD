```javascript 
// handle tag input
  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Enter" || e.key === ",") {
      if (tags.length >= 10) {
        toast("You can add up to 10 tags only.", {
          variant: "warning",
          timeout: 3000,
        });
        e.currentTarget.value = "";
        return;
      }

      const value = e.currentTarget.value;
      const tag = value.trim().toLowerCase().replace(/,/g, "");
      if (tag && !tags.includes(tag)) {
        setTags(prev => [...prev, tag]);
      }

      e.currentTarget.value = "";
    } else if (e.key === "Backspace" && e.currentTarget.value.trim() === "") {
      // Remove last tag on backspace when input is empty
      setTags(prev => prev.slice(0, prev.length - 1));
    }
  };
```