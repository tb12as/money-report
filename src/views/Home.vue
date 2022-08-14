<template>
  <div class="h-96 grid">
    <vs-row>
      <vs-col xs="12" w="8" class="p-3">
        <div class="bg-white p-3 rounded shadow-lg">
          <h1 class="text-2xl py-3 font-bold">Report</h1>

          <div v-for="(v, i) in data" :key="i">
            <div
              class="rounded-md p-2 m-2"
              :class="
                v.diff.includes('-') || v.diff == 0
                  ? 'bg-red-300'
                  : 'bg-green-300'
              "
            >
              <p class="text-lg font-semibold">{{ i }}</p>

              <table class="w-full ml-2">
                <tr>
                  <td width="50%" class="text-sm">Start of Month</td>
                  <td class="text-sm">:</td>
                  <td>{{ v.start }}</td>
                </tr>
                <tr>
                  <td class="text-sm">End of Month</td>
                  <td class="text-sm">:</td>
                  <td>{{ v.end }}</td>
                </tr>
                <tr>
                  <td class="text-sm">Diff</td>
                  <td class="text-sm">:</td>
                  <td class="font-semibold">
                    {{ v.diff }}
                    <span class="text-xs font-normal" v-if="v.diff != 0">{{
                      v.diff.includes("-") ? " (Pengurangan)" : " (Penambahan)"
                    }}</span>
                    <span class="text-xs font-normal" v-else>
                      (Terpakai habis)</span
                    >
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </vs-col>
      <vs-col xs="12" w="4" class="p-3">
        <div class="bg-white p-3 rounded shadow-lg">
          <h1 class="text-2xl py-3 font-bold">Input</h1>

          <form>
            <div class="my-2">
              <vs-select placeholder="Type" v-model="form.type">
                <vs-option label="Start of Month" value="start_of_month">
                  Start of Month
                </vs-option>
                <vs-option label="End of Month" value="end_of_month">
                  End of Month
                </vs-option>
              </vs-select>
            </div>

            <div class="my-2">
              <vs-select placeholder="Month" v-model="form.month" filter>
                <vs-option
                  v-for="(m, i) in months"
                  :key="i"
                  :label="m"
                  :value="i + 1"
                >
                  {{ m }}
                </vs-option>
              </vs-select>
            </div>

            <div class="my-2" v-if="years.length > 0">
              <vs-select placeholder="Year" v-model="form.year" filter>
                <vs-option
                  v-for="(y, i) in years"
                  :key="i"
                  :label="y"
                  :value="y"
                >
                  {{ y }}
                </vs-option>
              </vs-select>
            </div>

            <div class="my-2">
              <vs-input
                class="mb-4"
                type="number"
                v-model="form.amount"
                placeholder="Amount"
              />
            </div>

            <div class="my-3">
              <vs-button type="border" @click.prevent="send()" color="primary"
                >Save</vs-button
              >
            </div>
          </form>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: "",
        month: "",
        year: "",
      },
      data: [],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      years: [],
    };
  },

  beforeCreate() {
    this.axios.get("api/money/report").then((res) => {
      this.data = res.data;
    });
  },

  created() {
    const now = new Date();
    this.form = {
      type: "",
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    };

    let year = new Date().getFullYear();
    const years = [];
    for (let i = year - 3; i < year + 5; i++) {
      years.push(i);
    }
    this.years = years;
  },

  methods: {
    getReport() {
      this.axios.get("api/money/report").then((res) => {
        this.data = res.data;
      });
    },

    send() {
      this.axios.post("/api/money", this.form).then((res) => {
        const now = new Date();
        this.form = {
          type: "",
          month: now.getMonth() + 1,
          year: now.getFullYear(),
        };

        this.getReport();
      });
    },
  },
};
</script>
