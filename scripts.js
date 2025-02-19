// Alpine.js component for filtering the cases list
function caseSearch() {
  return {
    search: "",
    filterCases() {
      // Get the query in lowercase
      const query = this.search.toLowerCase();
      // Iterate over all list items and toggle the "hidden" class
      document.querySelectorAll("#case-list li").forEach((li) => {
        const title = li.getAttribute("data-title").toLowerCase();
        li.classList.toggle("hidden", !title.includes(query));
      });
    },
  };
}
