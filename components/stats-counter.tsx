"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Award, BookOpen, Building, GraduationCap, Users } from "lucide-react";

export function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: GraduationCap,
      value: 2500,
      label: "Alumni Network",
      suffix: "+",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Users,
      value: 50,
      label: "Expert Faculty",
      suffix: "+",
      color: "bg-amber-100 text-amber-700",
    },
    {
      icon: Building,
      value: 100,
      label: "Recruiting Companies",
      suffix: "+",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: Award,
      value: 19,
      label: "Years of Excellence",
      suffix: "+",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: BookOpen,
      value: 5,
      label: "Programs Offered",
      suffix: "+",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              color={stat.color}
              isInView={isInView}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  icon: Icon,
  value,
  label,
  suffix,
  color,
  isInView,
  delay,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16); // 60fps

      // Add delay based on item position
      const timer = setTimeout(() => {
        const counter = setInterval(() => {
          start += increment;
          if (start > end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <div
      className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      <div className={`rounded-full p-3 ${color} mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-3xl font-bold">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
