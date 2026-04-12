In #Vue, there are three ways to write components:

1. **Options API** → the “old” / classic way
2. **Composition API** → the newer, more flexible way
3. **`<script setup>`** → a simplified syntax for Composition API

They all do the same things, just with different styles.

# 1️⃣ Options API (the easiest to read at first)

### 🧠 Idea:

You organize your component by **type of thing** (data, methods, lifecycle…)

### Example:

```
export default {  
  data() {  
    return {  
      count: 0  
    }  
  },  
  methods: {  
    increment() {  
      this.count++  
    }  
  }  
}
```


---

### 🧩 How to think about it (Angular comparison)

| Vue Options API | #Angular             |
| --------------- | -------------------- |
| `data()`        | component properties |
| `methods`       | class methods        |
| `mounted()`     | `ngOnInit()`         |

So mentally, this feels like:

```
export class MyComponent {  
	count = 0;  
	  
	increment() {  
		this.count++;  
	}  
}
```
---

### 👍 Pros

- Very easy to understand
- Good for beginners

### 👎 Cons

- Logic gets **split across sections**
- Harder to reuse logic (compared to Angular services)

---

# 2️⃣ Composition API (more powerful, more flexible)
### 🧠 Idea:

Instead of grouping by type, you group by **feature/logic**

---

### Example:

```
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    return {
      count,
      increment
    }
  }
}
```

---

### 🧩 Angular comparison

This is closer to:

- putting logic into **custom reusable functions**
- similar to **services + composable logic**

Think:

```
function useCounter() {  
  const count = signal(0);  
  
  function increment() {  
    count.update(v => v + 1);  
  }  
  
  return { count, increment };  
}
```

👉 Very similar concept to Angular **signals + composable logic**

---

### ⚠️ Key difference

In Vue:

```
count.value++
```

Because Vue wraps reactive values (`ref`)

---

### 👍 Pros

- Logic is **grouped together**
- Easy to reuse (like custom hooks/functions)
- Scales better

### 👎 Cons

- Slightly harder at the beginning
- `.value` can feel weird

---

# 3️⃣ Composition API with `<script setup>` (modern standard)

### 🧠 Idea:

Same as Composition API — but **less boilerplate**

---

### Example:

```
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>
```

👉 No `export default`, no `setup()`, no `return`

---

### 🧩 Angular comparison

This feels closest to:

- writing code directly inside the component class
- but with **less ceremony**

---

### 👍 Pros

- Cleanest and shortest
- Recommended by Vue team
- Best developer experience

### 👎 Cons

- Slightly “magical” at first (things auto-exposed to template)

---

# 🧠 Simple Mental Model

If you come from Angular:

- **Options API** → like a structured object version of a component
- **Composition API** → like extracting logic into reusable functions
- **`script setup`** → Composition API but cleaner

---

# ⚖️ When to use what?
|API|When to use|
|---|---|
|Options API|Learning Vue / simple components|
|Composition API|Complex logic / reusable code|
|`<script setup>`|✅ Default choice in Vue 3|

---

# 🧩 Final analogy (Angular mindset)

Think of Vue evolution like:

- Options API → early Angular (more structured but rigid)
- Composition API → Angular with signals + composable logic
- Script setup → Angular but with much less boilerplate

