<template>
<router-link 
class="invoice flex"
:to="{}">
<div class="left flex">
<span class="tracking number">#{{invoice.invoiceId}}</span>
<span class="due-date">{{invoice.paymentDueDate}}</span>
<span class="person">invoice.clientName</span>
</div>
<div class="right flex">
    <span class="price">${{invoice.invoiceTotal}}</span>
    <div class="div status-button flex"
    :class="{paid: invoice.invoicePaid, draft: invoiceDraft, pending: invoice.invoicePending}"
    >
       <span v-if="invoice.invoicePaid">Paid</span>
       <span v-if="invoice.invoiceDraft">Draft</span>
       <span v-if="invoice.invoicePending">Pending</span>
    </div>
    <div class="icon">
        <img src="@/assets/icon-arrow-right.svg" alt="">
    </div>
</div>

</router-link>
</template>

<script>
export default {
     name: "Invoice",
     props: ["Invoice"],
}
</script>

<style>

</style>